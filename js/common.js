// ------------------------------------------------------------ //
// Видимость каруселей для мобильных и десктопных версий сайта
// ------------------------------------------------------------ //


var sliderGallery = function() {

	/*** Vars ***/
	var gallery1 = '.recommendations_items',
		gallery2 = '.stacks',
		slider = false;

	/*** Init ***/
	var init = function() {
		manage(); // On load (1*)

		$(window).on('resize', function(){ // On resize (2*)
			waitForFinalEvent(function(){
				manage();
			}, 200, "sliderGallery");
		});

	};

	/*** Manage slider ***/
	var manage = function() {
		var isMobile = $('#bp_mobile').is(':visible');
		var isDesktop = $('#bp_desktop').is(':visible');
		var isCloseIcon = $('.icon_close').is(':visible');

		if( isMobile && !slider ) { // If mobile and slider not built yet = build
			build();
		}
		else if( !isMobile && slider ) { // Not mobile but slider built = destroy
			destroy();
		}
		var is_show_menu = $('.menu_block').attr('data-isshow');
		console.log(is_show_menu);

		if (isDesktop) {
			$('.menu_block').css('display','flex');
		} else if ($('.menu_block').attr('data-isshow') === '1') {
			$('.menu_block').css('display','flex');
		} else {
			$('.menu_block').css('display','none');
		}

	};

	/*** Build slider ***/
	var build = function() {
		slider1 = $(gallery1).addClass('owl-carousel'); // Add owl slider class (3*)
		slider1.owlCarousel({ // Initialize slider
			items:1,
            margin: 0,
            loop: false,
            dots: true
		});

		slider2 = $(gallery2).addClass('owl-carousel'); // Add owl slider class (3*)
		slider2.owlCarousel({ // Initialize slider
			items:1,
            margin: 0,
			autoHeight: true,
            loop: false,
            dots: true
		});
	};

	/*** Destroy slider ***/
	var destroy = function() {
		slider1.trigger('destroy.owl.carousel'); // Trigger destroy event (4*)
		slider1 = false; // Reinit slider variable
		$(gallery1).removeClass('owl-carousel'); // Remove owl slider class (3*)

		slider2.trigger('destroy.owl.carousel'); // Trigger destroy event (4*)
		slider2 = false; // Reinit slider variable
		$(gallery2).removeClass('owl-carousel'); // Remove owl slider class (3*)
	};	

	/*** Public methods***/
	return {
		init: init
	};

}();

// ---------------------------------------------------- //
// PREVENT MULTIPLE CALLS
// ---------------------------------------------------- //
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
			clearTimeout (timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();