var menu=document.querySelector(".menu-img");
var over=document.querySelector(".overlay");
var close=document.querySelector(".close");

menu.addEventListener("click",function(){
    over.style.transform="translate(0)";

})
close.addEventListener("click",function(){
    over.style.transform="translate(100%)";
})


// gsap 
gsap.from(".buy",{
    opacity:0,
    duration:1

})
gsap.from(".menu",{
    opacity:0,
    duration:1

})
gsap.from(".menu-img",{
    opacity:0,
    duration:1

})
gsap.from(".whisky",{
    y:800,
    delay:1,
    duration:1
    
})

var tl=gsap.timeline()
tl.from(".up",{
    y:100,
    opacity:0,
    duration:1
    
})
tl.from(".mid",{
    y:100,
    opacity:0,
    duration:1
    
})
tl.from(".down",{
    y:100,
    opacity:0,
    duration:1
    
})
tl.from(".arrow",{
    x:100,
    opacity:0,
    duration:1
})

gsap.from(".container2 .in",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".in",
        scroller:"body",
        scrub:"true"
    }
})
gsap.from(".container3 .upr",{
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:".container3 ",
        scroller:"body",
        scrub:"true"
    }

})
// gsap.from(".container4",{
//     scale:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".container4 .up1",
//         scroller:"body",
//         scrub:"true"
//     }

// })