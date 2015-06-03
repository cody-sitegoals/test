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

//old
jQuery(function( jQuery ) {

	jQuery( document ).ready(function() {

		jQuery("a.single_image").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
		});
	});
});

function inlineSocial(){
	jQuery('.synved-social-container-share').addClass('inline-social');
	console.log('test');
}