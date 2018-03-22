$(document).ready(function($) {

	/* Fixed Nav */
	var shrinkHeader = 140;
	$(window).scroll(function() {
	var scroll = getCurrentScroll();
	  if ( scroll >= shrinkHeader ) {
		   $('body').addClass('fixed-header');
		}else {
			$('body').removeClass('fixed-header');
		}
	});
	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
	
	/* Mobile Nav Toggle */
	$('.navbar-toggle').click(function(){
		$('body').addClass('mobile-nav');
	})
	$('a.close-nav').click(function(){
		$('body').removeClass('mobile-nav');
	})
	
	
	/* TEAM MEMBER scripts*/
	$('a.close-member').click(function(e){
		e.preventDefault();
		$('#member-info').fadeOut(1000);
	})

	/* Back to top link */
	$('.backtotop > a').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 200) {
			$('.backtotop').fadeIn(1000);
		} else {
			$('.backtotop').fadeOut(500);
		}
	});
	

});