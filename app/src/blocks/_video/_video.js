$(function() {
	$('.video').each(function() {
		var item = $(this);
		item
			.append('<div class="video__preview"></div><div class="video__play-btn"></div>')
			.on('click', function() {
				item
					.empty()
					.append("<iframe class='video__frame' src='https://www.youtube.com/embed/" + item.attr('data-id') + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1' frameborder='0' allowfullscreen></iframe>");
			})
			.find('.video__preview')
			.attr('style', 'background-image: url(http://i.ytimg.com/vi/' + item.attr('data-id') + '/hqdefault.jpg)');
	});
});