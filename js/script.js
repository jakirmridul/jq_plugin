// counterUp2 js
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 1000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.counter2' )
IO.observe( el )

//wow js
wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       10,          // default
    mobile:       true,       // default
    live:         true        // default
   })
wow.init();

// jq
$(document).ready(function(){

 // counter Up 1
	$('.counter1').counterUp({
    delay: 10,
    time: 1000
	});
// counterUp 3
 $("#charUp").counter({
    count: 'up',
    goal: 30
});
  $("#wordDown").counter({
    type: 'word',
    goal: 10
});
  $("#countdown").counter({
    count: 'down',
    goal: 144
});
  $("#customMessage").counter({
    count: 'down',
    goal: 144,
    msg: 'characters left before you fall into a pit of emptiness.'
});
  $("#noLimit").counter({
    goal: 'sky',
    msg : 'amazing characters'
});
   $("#contentEditable").counter({

});
   $("#customContainer").counter({
containerClass: 'cou_3'
});
// aos
   // Aos
AOS.init({
	offset: 100,
	delay: 50,
	duration: 500,
	easing: 'linear'
});

 var mixer = mixitup('#mainTab');
    var mixer = mixitup('#mainTab', {
       
        animation: {
            duration: 300
        },
        animation: {
        easing: 'ease-in-out'
        }
    });

  lightbox.option({
      'resizeDuration': 300,
      'wrapAround': true
    });

$('.slider_cont').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
  ]

    });
$('.demo_cont').slick({
    dots: true,
    draggable: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    centerMode: true,
    centerPadding: '60px',
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]

  });

  $('.demo_cont2').slick({
    speed: 500,
  fade: true,
  cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
  });


  // Slider Syncing

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  speed: 700,
  centerMode: true,
  focusOnSelect: true
});



});