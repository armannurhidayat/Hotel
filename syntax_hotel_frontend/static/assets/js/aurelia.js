/*===================================================================================================
	AURELIA - MAIN JS
===================================================================================================*/

var aurelia = (function() {
	'use strict';

	function init() {

		// ANIMATE CSS EXTEND
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass('animated ' + animationName);
				});
			}
		});

		// INIT FILTERIZR
		$('.filtr-container').filterizr();

		initHero();
		initHeroInner();
		initWaypoint();
		initMap();
		initOwlCarousel();
	}

	function initHero() {
		$('.hero').vegas({
			valign: '0',
			transition: 'fade',
			transitionDuration: '3000',
			animation: 'kenburns',
			delay: 5000,

			// SLIDES
			slides: [
				{ src: 'assets/images/header/bg1.jpg' },
				{ src: 'assets/images/header/bg2.jpg' },
				{ src: 'assets/images/header/bg3.jpg' },
				{ src: 'assets/images/header/bg4.jpg' },
			]
		});
	}

	function initHeroInner() {
		var heroInner    = $('.hero .hero-inner'),
			title        = heroInner.find('.title'),
			description  = heroInner.find('.description'),
			bookNowBtn   = heroInner.find('#hero-book-now'),
			animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		setTimeout(function() {
			title.removeClass('invisible').animateCss('fadeInDown');
		}, 500);

		title.one(animationEnd, function() {
			description.removeClass('invisible').animateCss('slideInLeft');
		});
		description.one(animationEnd, function() {
			bookNowBtn.removeClass('invisible').animateCss('fadeInUp');
		});
	}

	function initWaypoint() {
		var waypoints = $('.waypoint');
		for (var i = 0; i < waypoints.length; i++) {
			(function() {
				var waypoint = $(waypoints[i]),
					animate  = waypoint.data('animate') || 'fadeInUp',
					offset   = waypoint.data('offset') || 30;

				waypoint.addClass('invisible');
				waypoint.waypoint(function() {
					waypoint.removeClass('invisible').addClass('animated ' + animate);

					// destory
					this.destroy();
				}, {
					offset: offset + '%'
				});
			})();
		}
	}

	function initMap() {
		$('#map').waypoint(function() {
			var position = {lat: 33.5422, lng: -117.7831},
				map      = new google.maps.Map(document.getElementById('map'), {center: position, scrollwheel: false, zoom: 16}),

				// Add Marker
				marker = new google.maps.Marker({
					position: position,
					icon: 'assets/images/other/map-marker.png',
					clickable: false
				});
			marker.setMap(map);

			// destory
			this.destroy();
		}, {
			offset: '90%'
		});
	}

	function toggleHeader() {
		var top = $(this).scrollTop(),
			header = $('.site-header');

		if (top > 40) {
			header.addClass('fixed-top');
		} else {
			header.removeClass('fixed-top');
		}
	}

	function smoothScroll(event) {
		event.preventDefault();

		var top = $(this.hash).offset().top - 70;
		$('html, body').animate({scrollTop: top}, 500);
	}

	function initOwlCarousel() {
		$('.owl-carousel').owlCarousel({
			items: 1
		});
	}

	return {
		init: init,
		toggleHeader: toggleHeader,
		smoothScroll: smoothScroll,
	};
})();

// WHEN DOCUMENT IS READY
$(document).ready(function() {
	aurelia.init();

	$('.smooth-scroll').on('click', aurelia.smoothScroll);

	$('.filter-room-btn').on('click', function(e) {
		e.preventDefault();
		$('.filter-room-btn').removeClass('active');
		$(this).addClass('active');
	});

	$('.hotel-book-now').on('click', function() {
		$('#room-details-modal').modal('hide');
	});

	$('#mobile-menu-btn').on('click', function(e) {
		e.preventDefault();
		$('#mobile-menu').show('slide', {direction: 'right'}, 300);
		$('#mobile-menu-overlay').fadeIn(300);
	});

	$('#close-mobile-menu-btn, #mobile-menu ul li a, #mobile-menu-overlay').on('click', function(e) {
		e.preventDefault();
		$('#mobile-menu').hide('slide', {direction: 'right'}, 300);
		$('#mobile-menu-overlay').fadeOut(300);
	});
});

$(window).on('scroll', aurelia.toggleHeader);
window.onload = function() {
	$('#page-loader').fadeOut(500);
}
