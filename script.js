var main=document.querySelector(".main1");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(val){//val highly depends on the event that we are using
    gsap.to(cursor,{
        x: val.x,
        y: val.y,
        duration:.5
    })
});