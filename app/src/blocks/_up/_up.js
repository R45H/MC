var top_show = 2500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 700; // Задержка прокрутки

$(function() {
	var $up = $('.up'); // Кнопка прокрутки

	$(window).on('scroll resize', function() {
		if (window.innerWidth < '776') {
			$up.fadeOut();
			return;
		}
		if ($(this).scrollTop() > top_show) $up.fadeIn();
		else $up.fadeOut();
	});

	$up.on('click', function() {
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});
});