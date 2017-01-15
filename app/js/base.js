$(document).ready(function() {
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	
	var card_container = $('.card_container');
	var card_container_row = Math.ceil(card_container.children().length / 2);

	var start_from_card =  $('[data-from="signup"]');
	var start_to_card = $('[data-name="base"]');

	card_container.width(windowWidth * 2);
	card_container.height(windowHeight * card_container_row);

	$('.card').width(windowWidth);
	$('.card').height(windowHeight);
	console.log("window size : " + windowWidth + ' X '  + windowHeight);
	console.log('container row : ' + card_container_row);
	console.log('container size : ' + card_container.width() + ' X ' + card_container.height());

	animateToCard(start_from_card, start_to_card, 0, 0);
});

$('[data-to]').on('click', function(event) {
	var fromCard = $(this).attr('data-from');
	var toCard = $(this).attr('data-to');

	var fromDirection = $("[data-name='"+fromCard+"']");
	var toDirection = $("[data-name='"+toCard+"']");

	animateToCard(fromDirection, toDirection, 1000, 2000);
})


function animateToCard(fromDirection, toDirection, scaleSpeed, scrollSpeed) {
	var x = $(toDirection).offset().left;
	var y = $(toDirection).offset().top;
	
	console.log('position card : ' + x + 'X' + y);

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