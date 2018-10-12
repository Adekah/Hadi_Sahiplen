/*
	Project Name : PetCare
	
	- Google-map
	
	## Document Ready
		- Scrolling Navigation
		- Responsive Caret
		- Remove p empty tag for Shortcode
		- Intro
		- Services
		- Why Choose Us
		- Team
		- Counter
		- Shop
		- Offer Shape
		- Brands
		- Map Section
		- Contact Form
		- Price Filter
		- Pricing

	## Window Load
		- Site Loader
*/

(function($) {

	"use strict"
	
	/* - Google-map */
	function initialize(obj) {

		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = 'images/marker.png';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"), 10);
		var styles = [{"featureType":"landscape","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":" "},{"saturation":" "}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":" "},{"saturation":" "}]}]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);
	
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});      
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});	
	}
	
	/* ## Document Scroll - Window Scroll */
	$( document ).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height )
		{
			$('.ow-navigation').addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.ow-navigation').removeClass("navbar-fixed-top animated fadeInDown");
		}
		else
		{
			$('.ow-navigation').removeClass("navbar-fixed-top animated fadeInDown");
		} // set sticky menu - end		

		if ($(this).scrollTop() >= 50)
		{
			// If page is scrolled more than 50px
			$('#back-to-top').fadeIn(200);    // Fade in the arrow
		}
		else
		{
			$('#back-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	
	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {

		/* - Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();		
		
		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			$('.ow-navigation').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.ow-navigation').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.ow-navigation').removeClass("navbar-fixed-top");
		} // set sticky menu - end
		
		/* local url of page (minus any hash, but including any potential query string) */
		var url = location.href.replace(/#.*/,'');

		/* Find all anchors */
		$('#navbar').find('a[href]').each(function(i,a) {

			var $a = $(a);
			var href = $a.attr('href');

			/* check is anchor href starts with page's URI */
			if ( href.indexOf(url+'#') == 0 ) {

				/* remove URI from href */
				href = href.replace(url,'');

				/* update anchors HREF with new one */
				$a.attr('href',href);
			}
		});

		/* Add Easing Effect on Section Scroll */
		$('.navbar-nav li a[href*=#]:not([href=#]), .site-logo a[href*=#]:not([href=#])').on('click', function() {

			if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {

					$('html, body').animate( { scrollTop: target.offset().top - 83 }, 1000, 'easeInOutExpo' );
					return false;
				}
			}
		});

		/* - Responsive Caret */
		$('.ddl-switch').on('click', function() {

			var li = $(this).parent();

			if ( li.hasClass('ddl-active') || li.find('.ddl-active').length !== 0 || li.find('.dropdown-menu').is(':visible') ) {
				li.removeClass('ddl-active');
				li.children().find('.ddl-active').removeClass('ddl-active');
				li.children('.dropdown-menu').slideUp();	
			}
			else {
				li.addClass('ddl-active');
				li.children('.dropdown-menu').slideDown();
			}
		});
		
		/* - Remove p empty tag for Shortcode */
		$( 'p' ).each(function() {
			var $this = $( this );
				if( $this.html().replace(/\s|&nbsp;/g, '').length == 0) {
				$this.remove();
			}
		});
		
		/* - Intro */
		if($(".intro").length){
			$(".intro").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".intro .pet-images").addClass("animated fadeInDown");
				});
			});
		}
		
		/* - Services */
		if($(".services").length){
			$(".services").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".services .right-image").addClass("animated fadeInRight");
				});
			});
		}
		
		/* - Why Choose Us */
		if($(".why-choose-us").length){
			$(".why-choose-us").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".why-choose-us .why-choose-content").addClass("animated fadeInUp");
				});
			});
		}
		
		/* - Team */
		if( $(".team-thumb").length ) {
			$(".team-thumb").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: false,
				autoplay: true,
				responsive:{
					0:{
						items: 1
					},
					640:{
						items: 2
					},
					992:{
						items: 3
					},
					1200:{
						items: 4
					}
				}
			});
		}

		if($(".team ").length){
			$(".team ").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".team .team-member").addClass("animated fadeInLeft");
				});
			});
		}
		
		
		/* - Counter */
		if($(".counter").length) {
			$(".counter").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					var statistics_item_count = 0;
					var statistics_count = 0;					
					statistics_item_count = $( "[id*='statistics_count-']" ).length;
					
					for(var i=1; i<=statistics_item_count; i++)
					{
						statistics_count = $( "[id*='statistics_count-"+i+"']" ).attr( "data-statistics_percent" );
						$("[id*='statistics_count-"+i+"']").animateNumber({ number: statistics_count }, 2000);
					}				
				});
			});
		}
		
		 
		/* - Shop */
		if($(".shop ").length){
			$(".shop ").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".shop .product-box").addClass("animated fadeInRight");
				});
			});
		}
		
		/* - Offer Shape */
		$(".offer-shape").css("clip-path",'url("#clipPolygon1")');
		
		/* - What We Do */		
		if($(".what-we-do").length){
			$(".what-we-do").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".what-we-do").addClass("animated slideInDown");
				});
			});
		}
		
		/* - Brands */
		if( $(".brand-logo").length ) {
			$(".brand-logo").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: false,
				autoplay: true,
				responsive:{
					0:{
						items: 1
					},
					480:{
						items: 2
					},
					640:{
						items: 3
					},
					991:{
						items: 4
					},
					1200:{
						items: 6
					}
				}
			});
		}
		
		/* - Map Section */
		if($('#map-canvas-contact').length==1){
			initialize('map-canvas-contact');			
		}
		
		/* - Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
			event.preventDefault();
			var mydata = $("form").serialize();

			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {

				if( data["type"] == "error" ){
					$("#alert-msg").html(data["msg"]);
					$("#alert-msg").removeClass("alert-msg-success");
					$("#alert-msg").addClass("alert-msg-failure");
					$("#alert-msg").show();
				} else {
					$("#alert-msg").html(data["msg"]);
					$("#alert-msg").addClass("alert-msg-success");
					$("#alert-msg").removeClass("alert-msg-failure");     
					$("#first-name").val("");
					$("#last-name").val("");
					$("#input_phone").val("");
					$("#input_email").val("");
					$("#input_subject").val("");
					$("#textarea_message").val("");
					$("#alert-msg").show();    
				}    
				},
				error: function(xhr, textStatus, errorThrown) {
				//alert(textStatus);
				}
			});
			return false;
			$('#contact-form').attr("action", "saveQuery").submit();
		});

		/* Quick Contact Form /- */
		document.addEventListener('DOMContentLoaded', function () {
			document.querySelector('main').className += 'loaded';
		});
		
		/* - Price Filter */
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 15000,
			values: [ 0, 10000 ],
			slide: function( event, ui ) {
				$( "#amount" ).html( "$" + ui.values[ 0 ] )
				$( "#amount2" ).html( "$" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).html( "$" + $( "#slider-range" ).slider( "values", 0 ) );
		$( "#amount2" ).html( " $" + $(  "#slider-range" ).slider( "values", 1 ) );
		 
		/* - Pricing */		
		if($(".pricing").length){
			$(".pricing").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".pricing").addClass("animated slideInUp");
				});
			});
		}
		
	});

	/* ## Window Load - Handler for .load() called */
	$(window).load(function() {

		/* - Site Loader */
		if ( !$('html').is('.ie6, .ie7, .ie8') ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css('display','none');
		}
	});

})(jQuery);