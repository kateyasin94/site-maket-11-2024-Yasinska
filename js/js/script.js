$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });


$(function(){
	let data = new Date();
	$(".year").html(data.getFullYear());
	//button up
	 $('.up').click(function () {
    	 $('body,html').animate({
            scrollTop: 0
        }, 1000);
        });
})