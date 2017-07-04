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
    mouseDrag: false,
    touchDrag: false,
    autoHeight:true,
		responsive : {
			0 : {
				items : 1,
				
			}
		}
		
	});

	$("input, select, textarea").jqBootstrapValidation(
	{
		submitSuccess: function ($form, event) {

				event.preventDefault();
        //$(".main_form").submit(function() {
        	var str = $(".main_form").serialize();
        //E-mail Ajax Send
        $.ajax({
        	type: "POST",
        	url: "mail.php",
        	data: str
        }).done(function() {
        	$(this).find("input").val("");
        	alert("Спасибо, мы обязательно свяжемся с Вами в ближайшее время!");
        	$(".main_form").trigger("reset");
        });
        return false;
        //});
    }

  });


});