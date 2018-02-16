$(document).ready(function(){

	$('#btn_menu').click(function() {
		if( $('#menu_ul').hasClass('menu-hidden') ) {
			$(this).addClass('menu_open');
			$(this).removeClass('menu_close');
			//
			$('#menu_ul').removeClass('menu-hidden');
			
		} else {
			$(this).removeClass('menu_open');
			$(this).addClass('menu_close');
			//
			$('#menu_ul').addClass('menu-hidden');
		}
	});

	$('.sub_menu_ul').click(function(){
		var ul = $(this).children('ul');
		if( $(ul).hasClass('display-block') )
			$(ul).removeClass('display-block');
		else
			$(ul).addClass('display-block');
	});

	$(window).scroll(function(){
		var dd = $(this).scrollTop();
		var header = $('#menu_header');
		var logo_cnyn = $('#logo-cnyn');
		var logo_unam = $('#logo-unam');
		var svg_unam = $('#svg-unam');
		var svg_unam_logo = $('#svg-unam-logo');
		var w_window = $( window ).width();

		if( w_window <= 1250)
			return false;

		if(dd > 0) {
			header.css({'padding-top':'10px'});
			logo_cnyn.css({'top':'-45px', 'width': '70px'});
			logo_unam.css({'top':'-44px', 'padding': '8px 0'});
			svg_unam.css({'display':'none'});
			svg_unam_logo.css({'width':'69px'});
		}
		else {
			header.css({'padding-top':'32px'});
			logo_cnyn.css({'top':'-48px', 'width': '86px'});
			logo_unam.css({'top':'-66px', 'padding': '16px 0'});
			svg_unam.css({'display':'block'});
			svg_unam_logo.css({'width':'87px'});
		}
	});

	/*********************************
	 * ///////////////////////////////
	 * >> OWL CAROUSEL INICIO
	 * ///////////////////////////////
	 *********************************/

	$("#inicio-owl-carousel").owlCarousel({
		autoplay: true,
		autoplayHoverPause: false,
		autoplayTimeout: 5000,
		items: 1,
		loop: true,
		rewind: true,
		nav: true,
		dots: false,
		touchDrag: true,
		pullDrag: false,
		freeDrag: false,
		navText: ['<img src=\'img/svg/fchota_dorada_izquierda.svg\' alt=\'ANTERIOR\' />','<img src=\'img/svg/fchota_dorada_derecha.svg\' alt=\'SIGUIENTE\' />'],
	});

	/*********************************
	 * ///////////////////////////////
	 * >> OWL CAROUSEL EVENTOS
	 * ///////////////////////////////
	 *********************************/

	$("#eventos-owl-carousel").owlCarousel({
		autoplay: false,
		autoplayHoverPause: false,
		autoplayTimeout: 5000,
		items: 1,
		//margin: 23,
		loop: true,
		rewind: true,
		nav: false,
		dots: true,
		touchDrag: true,
		pullDrag: false,
		freeDrag: false,
		navText: ['ANTERIOR','SIGUIENTE'],
		autoHeight: true,
	});

	/*********************************
	 * ///////////////////////////////
	 * >> OWL CAROUSEL NOTICIAS
	 * ///////////////////////////////
	 *********************************/

	$("#noticias-owl-carousel").owlCarousel({
		autoplay: false,
		autoplayHoverPause: false,
		autoplayTimeout: 5000,
		items: 1,
		//margin: 23,
		loop: true,
		rewind: true,
		nav: false,
		dots: true,
		touchDrag: true,
		pullDrag: false,
		freeDrag: false,
		navText: ['ANTERIOR','SIGUIENTE'],
		autoHeight: true,
	});

	$(".infraestructura-owl-carousel").owlCarousel({
		autoplay: false,
		autoplayHoverPause: false,
		autoplayTimeout: 5000,
		items: 1,
		loop: true,
		rewind: true,
		nav: true,
		dots: false,
		touchDrag: true,
		pullDrag: false,
		freeDrag: false,
		navText: ['<img src=\'img/svg/fchota_dorada_izquierda.svg\' alt=\'ANTERIOR\' />','<img src=\'img/svg/fchota_dorada_derecha.svg\' alt=\'SIGUIENTE\' />'],
	});

	/*********************************
	 * ///////////////////////////////
	 * >> DIRECTORIO
	 * ///////////////////////////////
	 *********************************/

	$(".nav-directorio > ul > li > a").click(function(e) {
		e.preventDefault();

		// remove class
		var elements = $(".nav-directorio > ul > li > a");
		for (var i = elements.length - 1; i >= 0; i--) {
			$(elements[i]).removeClass("nav-directorio-select");
		};

		// add class
		$(this).addClass("nav-directorio-select");
	});

	/*********************************
	 * ///////////////////////////////
	 * >> data-tab
	 * ///////////////////////////////
	 *********************************/

	$('[data-tab]').click(function(e){
		e.preventDefault();
		var target = $(this).data('tab');
		$('.tabHolder > div.tabActive').removeClass('tabActive');
		$('#'+target).addClass('tabActive');
	});

// 
});