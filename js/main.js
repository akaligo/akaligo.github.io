jQuery(function( $ ){

	// Add class to site header on scroll
	$( document ).on('scroll', function(){

		if ( $( document ).scrollTop() > 0 ){
			$( '.site-header' ).addClass( 'dark' );

		} else {
			$( '.site-header' ).removeClass( 'dark' );
		}

	});

	// Navigation
	$( '.responsive-menu-icon' ).click( function () {
		$( this ).next( '.navigation' ).slideToggle();
	});

	setupMenus();

	$( window ).resize( function () {
		setupMenus();
	});

	function setupMenus() {
		if ( window.innerWidth <= 749 ) {
			$( '.navigation .jekyll-nav-menu' ).addClass( 'moved-item' ); // tag moved items so we can move them back
			$( '.navigation .jekyll-nav-menu' ).appendTo( '.navigation' );
		}

		if ( window.innerWidth > 749 ) {
			$( '.navigation' ).removeAttr( 'style' );
			$( '.responsive-menu .jekyll-nav-menu' ).removeClass( 'menu-open' );
		}
	}

});
