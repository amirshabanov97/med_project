$(document).ready(function() {
	var body = $('body');

	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var card_container_rows = Math.ceil($(".card_container").children().length / 2);
	
	body.width(windowWidth * 2);
	body.height(windowHeight * card_container_rows);
	
	$(".card").width(windowWidth);
	$(".card").height(windowHeight);

	body.velocity({
		scale: 1.2,
	}, 0);

	body.animate({
		scrollLeft: -265,
		scrollTop: 1248.300048828125,
	}, 0);

	$("#signup").on("click", function() {
		animateToCard(1, body, 800, 1600);
	});
	$("#card4").on("click", function() {
		animateToCard(5, body, 800, 1600);
	});
	$("#signin").on("click", function() {
		animateToCard(4, body, 800, 1600);
	});
	$("#card5").on("click", function() {
		animateToCard(4, body, 800, 1600);
	});
	$("#card8").on("click", function() {
		animateToCard(9, body, 800, 1600);
	});
	$("#card9").on("click", function() {
		animateToCard(5, body, 800, 1600);
	});
});

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
}