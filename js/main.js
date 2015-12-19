jQuery(function( $ ){

	// if( $( document ).scrollTop() > 0 ){
	// 	$( '.site-header' ).addClass( 'dark' );
	// }

	// Add class to site header on scroll
	$( document ).on('scroll', function(){

		if ( $( document ).scrollTop() > 0 ){
			$( '.site-header' ).addClass( 'dark' );

		} else {
			$( '.site-header' ).removeClass( 'dark' );
		}

	});


	$( '.nav-primary .jekyll-nav-menu' ).addClass( 'responsive-menu' ).before( '<div class="responsive-menu-icon"></div>' );

	$( '.responsive-menu-icon' ).click( function () {
		$( this ).next( '.nav-primary .jekyll-nav-menu' ).slideToggle();
	});

	$( '.responsive-menu' ).on( 'click', '.menu-item', function ( event ) {
		if ( event.target !== this )
			return;
		$( this ).find( '.sub-menu:first' ).slideToggle( function () {
			$( this ).parent().toggleClass( 'menu-open' );
		});
	});

	setupMenus();

	$( window ).resize( function () {
		setupMenus();
	});

	function setupMenus() {
		if ( window.innerWidth <= 549 ) {
			$( 'ul.menu-secondary > li' ).addClass( 'moved-item' ); // tag moved items so we can move them back
			$( 'ul.menu-secondary > li' ).appendTo( 'ul.menu-primary' );
			$( '.nav-secondary' ).hide();
		}

		if ( window.innerWidth > 549 ) {
			$( '.nav-primary .jekyll-nav-menu, nav .sub-menu' ).removeAttr( 'style' );
			$( '.responsive-menu > .menu-item' ).removeClass( 'menu-open' );
			$( '.nav-secondary' ).fast();
			$( 'ul.menu-primary > li.moved-item' ).appendTo( 'ul.menu-secondary' );
		}
	}

});
