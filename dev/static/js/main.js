;
// Начинать писать отсюда!!!!
$(function() {

	$(".owl-carousel").owlCarousel({
		Default: 1,
		loop:true,
		animateOut: 'fadeOut',
    smartSpeed: 1500,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		resposiveClass: true,
    nav: true,
    dots: true,
    autoHeight:true,
		responsive : {
			0 : {
				items : 1,
				
			}
		}
		
	});


});