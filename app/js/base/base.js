angular
	.module('baseApp', [])
	.controller('baseCtrl', ['$scope', function($scope) {
		$scope.login = function() {
			window.location.href = "http://barclous.me/client"
		}
	}]);
$(document).ready(function() {
	setTimeout(function() {
		document.getElementById('preloader').style.display = 'none';

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var card_container = $('.card_container');
		var card_container_row = Math.ceil(card_container.children().length / 2);

		var start_from_card =  $('[data-from="signup"]');
		var start_to_card = $('[data-name="base"]');

		var fromPath =	$("[data-point='signup']");
		var toPath = $("[data-point='base']");

		card_container.width(windowWidth * 2);
		card_container.height(windowHeight * card_container_row);

		$('.card').width(windowWidth);
		$('.card').height(windowHeight);
		console.log("window size : " + windowWidth + ' X '  + windowHeight);
		console.log('container row : ' + card_container_row);
		console.log('container size : ' + card_container.width() + ' X ' + card_container.height());

		animateToCard(start_from_card, start_to_card, 0, 0, fromPath, toPath);
	}, 1000);


	setTimeout(function() {
		$('.notification').animate({
			left: 0,
		}, {
			duration: 1000,
			easing: 'easeOutQuint',
			complete: function() {
				setTimeout(function() {
					$('.notification').animate({
						left: -600,
					}, {
						duration: 1000,
						easing: 'easeInQuart'
					})
				}, 10000)
			}
		})
	}, 7000);

	$('.notification_button').click(function() {
		$('.notification').animate({
			left: -600,
		}, {
			duration: 1500,
			easing: 'easeInQuart',
		})
	})
});

$('[data-to]').on('click', function(event) {
	var fromCard = $(this).attr('data-from');
	var toCard = $(this).attr('data-to');

	var fromPath =	$("[data-point='"+ fromCard +"']");
	var toPath = $("[data-point='"+ toCard +"']");

	var fromDirection = $("[data-name='"+fromCard+"']");
	var toDirection = $("[data-name='"+toCard+"']");

	animateToCard(fromDirection, toDirection, 1000, 2000, fromPath, toPath);
})

function animateToCard(fromDirection, toDirection, scaleSpeed, scrollSpeed, fromPath, toPath) {
	var x = $(toDirection).offset().left;
	var y = $(toDirection).offset().top;

	console.log('position card : ' + x + 'X' + y);

	fromPath.removeClass('active');
	$(fromDirection).velocity({
		scale: 1,
	}, {
		duration: scaleSpeed,
		queue: false,
		complete: function() {
			$('body').animate({
				scrollLeft: x,
				scrollTop: y
			}, {
				duration: scrollSpeed,
				easing: 'easeOutQuint',
				queue: false,
				complete: function() {
					toPath.addClass('active');
					$(toDirection).velocity({
						scale: 1.24,
					}, {
						duration: scaleSpeed,
						queue: false,
					})
				}
			});
		}
	});
};
