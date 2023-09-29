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




});