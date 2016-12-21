var top_show = 2500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 700; // Задержка прокрутки

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > top_show) $('.up').fadeIn();
		else $('.up').fadeOut();
	});
	$('.up').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});
});