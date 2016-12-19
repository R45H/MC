$(document).ready(function(){
	$('.owl').owlCarousel({
		loop: true,
		margin: 30,
		stagePadding: 15,
		nav: true,
		navText: '',
		dots: true,
		dotsClass: 'owl__dots',
		dotClass: 'owl__dot',
		responsive:{
			0: {
				items:1
			},
			576: {
				items:2
			},
			768: {
				items:3
			}
		}
	})
});