// import LocomotiveScroll from 'locomotive-scroll';
var main=document.querySelector("#main1");
var cursor = document.querySelector("#cursor");
var h = document.querySelector("#t");
var tm = document.querySelector(".slider")
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

// tm.addEventListener("mouseenter",function(){
//     gsap.to(cursor,{
//         scale: 2,
//         backgroundColor: "rgba(0,0,0,0.5)",
//     })
// });

// tm.addEventListener("mouseleave",function(){
//     gsap.to(cursor,{
//         scale: 1,
//         backgroundColor: "#fff"
//     })
// });

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
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, 
            scrollTrigger: {
                trigger: element,
                start: "top 100%", 
                end: "bottom 40%", 
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

gsap.from("#intro span", {
    opacity: 0,
    filter: "blur(10px)",
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#intro",
      start: "top 90%", // Start animation when the top of #intro is 80% in view
      end: "bottom 10%", // End animation when the top of #intro is at the top of the viewport
      toggleActions: "play none none reverse", // Play animation when entering viewport, reverse when leaving
    //   markers: true // Optional: Show markers for debugging
    }
  });

document.querySelectorAll(".map").forEach(function (elem) {
    var rotate = 0;//it will store the previous position of mouse in x-axis
    var duff = 0;

    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5
        });
    });

    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        duff = dets.clientX-rotate;//difference between current and previous position of mouse in x-axis
        rotate = dets.clientX;//new value of rotate will be the previous position of the mouse
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20,20,duff*.5)

        });
    });
});


const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const agent1Section = document.querySelector('#agent1');
const belowAnimationSection = document.querySelector('#agents');
const aboveAnimationSection = document.querySelector('#main1');

let scrollPosition = 0;
let isAnimating = false;
const scrollSpeed = 0.1;

sliderContainer.addEventListener('wheel', (event) => {
    event.preventDefault();

    const scrollDelta = Math.sign(event.deltaY);
    const slideWidth = slides[0].offsetWidth;
    const containerWidth = sliderContainer.offsetWidth;
    const maxScroll = slider.scrollWidth - containerWidth;

    // Update scroll position based on wheel direction
    scrollPosition += scrollDelta * slideWidth* scrollSpeed;

    // Limit scroll position within bounds
    if (scrollPosition < 0) {
        scrollPosition = 0;
    } else if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
    }

    // Animate slider movement
    gsap.to(slider, {
        x: -scrollPosition,
        duration: 5,
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

document.addEventListener('DOMContentLoaded', () => {
    const esportsSection = document.getElementById('esportsSection');
    const events = document.querySelectorAll('.event');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: esportsSection,
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }
    });

    // tl.from('.title', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' })
        tl.from('.description', { duration: 1, y: -30, opacity: 0, ease: 'power2.out' }, "-=0.5")
        .from(events, { duration: 1, scale: 0.8, opacity: 0, stagger: 0.2, ease: 'power2.out' }, "-=0.5");
});
gsap.to(".marque",{
    transform: "translateX(-100%)",
    duration: 2,
    ease: "none",
    repeat:-1//it will repeat infinte times
})

window.addEventListener("wheel",function(val){
    if(val.deltaY>0){
        gsap.to(".marque",{
            transform: "translateX(-200%)",
            duration: 8,
            ease: "none",
            repeat:-1//it will repeat infinte times
        })
        gsap.to(".marque img",{
            rotate: 180
        })
    }
    else{
        gsap.to(".marque",{
            transform: "translateX(0%)",
            duration: 8,
            ease: "none",
            repeat:-1//it will repeat infinte times
        })
        gsap.to(".marque img",{
            rotate: 0
        })
    }
})


gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );



