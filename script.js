// import LocomotiveScroll from 'locomotive-scroll';
var main=document.querySelector("#main1");
var cursor = document.querySelector("#cursor");
var h = document.querySelector("#t");
var mt = document.querySelector(".open-btn");

//locomotive
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main1'),
//     smooth: true
// });


main.addEventListener("mousemove",function(val){//val highly depends on the event that we are using
    gsap.to(cursor,{
        x: val.x,
        y: val.y,
        duration:.5,
        // delay: .1
    })
});



mt.addEventListener("mousemove",function(){
    gsap.to(cursor,{
        autoAlpha:0,
    })
});

mt.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        autoAlpha:1,
    })
});

h.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
    })
});

h.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale: 1,
        backgroundColor: "#fff"
    })
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.style.right === '0px';

    if (isOpen) {
        gsap.to(sidebar, { duration: 0.3, right: '-300px', opacity: 0, scale: 0.8, ease: "power2.inOut" });
    } else {
        gsap.to(sidebar, { duration: 0.3, right: '0', opacity: 1, scale: 1, ease: "power2.inOut" });
    }
}


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.reveal').forEach(element => {
    gsap.fromTo(element, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, 
            scrollTrigger: {
                trigger: element,
                start: "top 90%", 
                end: "bottom 70%", 
                scrub: 1, 
                toggleActions: "play none none none"
            }
        }
    );
});

Shery.textAnimate("#t h1", {
    style: 2,
    y: 0,
    delay: 0,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.imageEffect(".map img", {
    style: 3,
    config:{"uFrequencyX":{"value":6.11,"range":[0,100]},"uFrequencyY":{"value":6.11,"range":[0,100]},"uFrequencyZ":{"value":15.27,"range":[0,100]},"geoVertex":{"range":[1,64],"value":7.73},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":1.6480685615985813},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,

});

const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const agent1Section = document.querySelector('#agent1');
const belowAnimationSection = document.querySelector('#agents');
const aboveAnimationSection = document.querySelector('#main1');

let scrollPosition = 0;
let isAnimating = false;

sliderContainer.addEventListener('wheel', (event) => {
    event.preventDefault();

    const scrollDelta = Math.sign(event.deltaY);
    const slideWidth = slides[0].offsetWidth;
    const containerWidth = sliderContainer.offsetWidth;
    const maxScroll = slider.scrollWidth - containerWidth;

    // Update scroll position based on wheel direction
    scrollPosition += scrollDelta * slideWidth;

    // Limit scroll position within bounds
    if (scrollPosition < 0) {
        scrollPosition = 0;
    } else if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
    }

    // Animate slider movement
    gsap.to(slider, {
        x: -scrollPosition,
        duration: 0.5,
        ease: "power2.out"
    });

    // Check if reached the end of the slider
    if (scrollPosition >= maxScroll && !isAnimating) {
        // Scroll to below animation section
        belowAnimationSection.scrollIntoView({ behavior: 'smooth' });
        isAnimating = true;
    } else if (scrollPosition === 0 && !isAnimating) {
        // Scroll to above animation section
        aboveAnimationSection.scrollIntoView({ behavior: 'smooth' });
        isAnimating = true;
    }
});

// Reset animation state on slider scroll end
slider.addEventListener('scroll', () => {
    isAnimating = false;
});


// scripts.js
// document.querySelector('.map-container').addEventListener('wheel', function(event) {
//     if (event.deltaY !== 0) {
//         event.preventDefault();
//         this.scrollLeft += event.deltaY;
//     }
// });

