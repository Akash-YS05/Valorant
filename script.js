var main=document.querySelector(".main1");
var cursor = document.querySelector("#cursor");
var h = document.querySelector("#t");

main.addEventListener("mousemove",function(val){//val highly depends on the event that we are using
    gsap.to(cursor,{
        x: val.x,
        y: val.y,
        duration:.5,
        delay: .1
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
        start: "top 80%", // when the top of the element is 80% from the top of the viewport
        end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        toggleActions: "play none none none" // onEnter, onLeave, onEnterBack, onLeaveBack
      }
    }
  );
});
