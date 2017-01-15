$(document).ready(function() {
	var windowWidth = window.Width;
	var windowHeight = window.Height;
	
	var card_container = $('.card_container');
	var card_container_row = Math.ceil(card_container.children().length / 2);

	var start_from_card =  $('[data-from="signup"]');
	var start_to_card = $('[data-name="base"]');

	card_container.width(windowWidth * 2);
	card_container.Height(windowHeight * card_container_row);

	$('.card').width(windowWidth);
	$('.card').height(windowHeight);

	animateToCard(start_from_card, start_to_card, 0, 0);


});

$('[data-to]').on('click', function(event) {
	var fromCard = $(this).attr('data-from');
	var toCard = $(this).attr('data-to');

	var fromDirection = $("[data-name='"+fromCard+"']");
	var toDirection = $("[data-name='"+toCard+"']");
})


function animateToCard(cardnumber, body, scaleSpeed, transferSpeed) {
	card = "#card" + cardnumber;
	var x = $(card).offset().left;
	var y = $(card).offset().top;
	

	body.velocity({
		scale: 1,
	}, {
		duration: scaleSpeed,
		queue: false,
		complete: function() {
			body.animate({
				scrollLeft: x,
				scrollTop: y,
			}, {
				duration: transferSpeed,
				easing: 'easeOutExpo',
				queue: false,
				complete: function() {
					body.velocity({
						scale: 1.2,
					}, {
						duration: scaleSpeed,
						queue: false,
					})
				}
			});
		}
	});
};