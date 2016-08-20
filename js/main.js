$( document ).ready(function() {
    console.log( "ready!" );


  // loader

  setTimeout(function(){ $('.preloader').fadeOut(); }, 2000);

  // WOW
  new WOW({
    mobile: true,
    live: true
  }).init();

  
  // jQuery to collapse the navbar on scroll

  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });


  // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });




  // Flipclock
  
  var clock;

  $(document).ready(function() {

      // Grab the current date
      var currentDate = new Date();

      // Set some date in the past. In this case, it's always been since Jan 1
      var pastDate  = new Date(currentDate.getFullYear(), 0, 1);

      // Calculate the difference in seconds between the future and current date
      var diff = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;

      // Instantiate a coutdown FlipClock
      clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter'
      });
  });

  //  04 - Accordion

  $('.collapse').on('shown.bs.collapse', function(){
  $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
  }).on('hidden.bs.collapse', function(){
  $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
  });


	// Carousel

	$("#owl-intro").owlCarousel({

    // move dotsContainer outside the primary owl wrapper
      dotsContainer: '#IntroCustomPaggination',
      // other settings
 
    	nav:false, // Show next and prev buttons
      	slideSpeed : 300,
      	paginationSpeed : 400,
      	items : 1 // here was "singleItem:true" before changes:


      	// "singleItem:true" is a shortcut for:
      	// items : 1, 
      	// itemsDesktop : false,
      	// itemsDesktopSmall : false,
      	// itemsTablet: false,
      	// itemsMobile : false
 
  });


	var owl = $("#owl-actors");
 
	owl.owlCarousel({
      // move dotsContainer outside the primary owl wrapper
      dotsContainer: '#ActorsCustomPaggination',
      // other settings

	    nav : true,
	    navText: ["<img src='img/carousels/arrow-left.png'>","<img src='img/carousels/arrow-right.png'>"],

      responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
      }
	 
	});




	$('#owl-gallery').owlCarousel({

    // move dotsContainer outside the primary owl wrapper
    dotsContainer: '#GalleryCustomPaggination',
    // other settings
		loop:true,
	  margin:0,
	  nav:true,

	  navText: ["<img src='img/carousels/arrow-left.png'>","<img src='img/carousels/arrow-right.png'>"],
  	items : 3,
    responsive:{
          0:{
              items:1,
              nav:true
          },
          320:{
              items:1,
              nav:true
          },
          481:{
              items:1,
              nav:true
          },
          767:{
              items:1,
              nav:true,
              loop:true
          },
          991:{
              items:2,
              nav:true,
              loop:true
          },
           1200:{
              items:3,
              nav:true,
              loop:true
          },

          1300:{
              items:3,
              nav:true,
              loop:true
          }
    }
	});




	$("#owl-blog_posts").owlCarousel({
    // move dotsContainer outside the primary owl wrapper
    dotsContainer: '#BlogpostCustomPaggination',
    // other settings
 
    	nav:true, // Show next and prev buttons
      	slideSpeed : 300,
      	paginationSpeed : 400,
      	items : 1, // here was "singleItem:true" before changes:


      navText: ["<img src='img/carousels/arrow-left.png'>","<img src='img/carousels/arrow-right.png'>"],

      	// "singleItem:true" is a shortcut for:
      	// items : 1, 
      	// itemsDesktop : false,
      	// itemsDesktopSmall : false,
      	// itemsTablet: false,
      	// itemsMobile : false

  });



	$("#owl-reviews").owlCarousel({
      // move dotsContainer outside the primary owl wrapper
      dotsContainer: '#ReviewsCustomPaggination',
      // other settings
 
    	nav:true, // Show next and prev buttons
      	slideSpeed : 300,
      	paginationSpeed : 400,
      	items : 1, // here was "singleItem:true" before changes:


      	navText: ["<img src='img/carousels/arrow-left.png'>","<img src='img/carousels/arrow-right.png'>"]

      	// "singleItem:true" is a shortcut for:
      	// items : 1, 
      	// itemsDesktop : false,
      	// itemsDesktopSmall : false,
      	// itemsTablet: false,
      	// itemsMobile : false
 
  	});

  // magnificPopup

  $('#owl-gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    fixedContentPos: false,
        gallery: {
        enabled: true
      },

    fixedBgPos: false

  });


  // Video dampers

  /*$('.damper_left').animate ({
      left: '-700px',
      opacity: '0.5'
  }, 4000, function () {
      $(this).hide();
  }); */



  $('#about_player').appear(function() {
  $(".damper-left").css('width','5%');
  $(".damper-right").css('width','5%');
  },{accX: 0, accY: -200});





 $(".features-wrap").appear(function() {
    $(".expand-1").css("width", '94%');
    $(".expand-2").css("width", '72%');
    $(".expand-3").css("width", '86%');
    $(".expand-4").css("width", '64%');
  },{accX: 0, accY: -70});

  //Rating by professionals RED-LINES

  $('.features-wrap').appear(function() {
    $('.expand-1').css('width', '94%');
    $('.expand-2').css('width', '72%');
    $('.expand-3').css('width', '86%');
    $('.expand-4').css('width', '64%');
  },{accX: 0, accY: -70});


  // Animate Number Plugin

  $('#counter-1').animateNumber({ number: 1024 }, 5000 );
  $('#counter-2').animateNumber({ number: 2360 }, 5000 );
  $('#counter-3').animateNumber({ number: 1586 }, 5000 ); 

  $('#expand-counter-1').animateNumber({ number: 94 }, 3000 );
  $('#expand-counter-2').animateNumber({ number: 72 }, 3000 );
  $('#expand-counter-3').animateNumber({ number: 86 }, 3000 );
  $('#expand-counter-4').animateNumber({ number: 64 }, 3000 )


    
});


