/* Add new scroll animations */
let controller = new ScrollMagic.Controller();

// let blockTween = new TweenMax.to('#three', 1.5, {
//     opacity: 1
// });

// create a scene
let scene = new ScrollMagic.Scene({
    triggerElement: '#three',
    triggerHook: 1,
    duration: "100%"
})
.setClassToggle("#three", "visible")
.addIndicators()
.addTo(controller);