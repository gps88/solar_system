$(document).ready(function() {
	$('#fullpage').fullpage({
            
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
            
        sectionsColor: ['#000', '#000', '#000', '#000'],
            
        slidesNavigation: true,

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
        scrollHorizontally: true,
		scrollBar: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopHorizontal: true,
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
        normalScrollElements: '#renderCanvas',

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		lazyLoading: true,
            
        
	});
});