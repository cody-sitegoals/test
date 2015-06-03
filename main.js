/**
 * InfoWars.com - Sitegoals
 *
 */
jQuery(document).ready(function() {
	initMenuHover();
	inlineSocial();
});
jQuery(window).resize(function(){
	//about a week ago
});

function initMenuHover(){
	//keeps top menu item is highlighted when hovering over child items. 
	jQuery('#menu-navigation-header ul li').mouseenter(function(){
		jQuery(this).parents('li').addClass('hover');
	});
	jQuery('#menu-navigation-header ul li').mouseleave(function(){
		jQuery(this).parents('li').removeClass('hover');
	});
}


jQuery(function($) {

	$( document ).ready(function() {

		jQuery("a.single_image").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
		});

		jQuery("img").addClass("img-responsive");
		// Find all YouTube videos
				var $allVideos = $(".youtube-player"),

			    // The element that is fluid width
			    $fluidEl = $(".video");

				// Figure out and save aspect ratio for each video
				$allVideos.each(function() {

					$(this)
						.data('aspectRatio', this.height / this.width)
						
						// and remove the hard coded width/height
						.removeAttr('height')
						.removeAttr('width');

				});

				// When the window is resized
				// (You'll probably want to debounce this)
				$(window).resize(function() {

					var newWidth = $fluidEl.width();
					
					// Resize all videos according to their own aspect ratio
					$allVideos.each(function() {

						var $el = $(this);
						$el
							.width(newWidth)
							.height(newWidth * $el.data('aspectRatio'));

					});

				// Kick off one resize to fix all videos on page load
				}).resize();

			 	$("#today-on-the-show-read-more").click(function(e) {
			 		e.preventDefault();
			 		$(".today-on-the-show-content").animate({maxHeight:"100%"}, "slow", function(){
			 			$("#today-on-the-show-read-more").hide("slow", function(){
			 				$("#today-on-the-show-collapse").show("slow");
			 			});
			 		});
			 	});

			 	$("#today-on-the-show-collapse").click(function(e) {
			 		e.preventDefault();
			 		$(".today-on-the-show-content").animate({maxHeight:"100px"}, "slow", function(){
				 		$("#today-on-the-show-collapse").hide("slow", function(){
				 			$("#today-on-the-show-read-more").show("slow");
				 		});
			 		});
			 	});


				$('#home-flexslider').flexslider({
					animation: "fade",
					prevText: "",           //String: Set the text for the "previous" directionNav item
					nextText: "",
				});

				$('.gallery-img-wrapper a').hover(function() {
				    $(this).find('img').fadeTo(500, 0.5);
				}, function() {
				    $(this).find('img').fadeTo(500, 1);
				});
		
	});
});

function inlineSocial(){
	jQuery('.synved-social-container-share').addClass('inline-social');
	console.log('test');
}