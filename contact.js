let BR = document.querySelector('.IconTelegram')
let TL = document.querySelector('.IconWatsApp')
let BL = document.querySelector('.IconInstagram')
let TR = document.querySelector('.IconFacebook')
let II = document.querySelector('.IconI')
let AB = document.querySelector('.Arrowback')
let MB = document.querySelector('.Menu_back')
document.onselectstart=new Function("return false");
document.ondragstart=new Function("return false");
MB.addEventListener('mouseenter',function(){
    anime({
        targets:AB,
        opacity:1,
        translateX:25,
        duration:500,
        easing:'linear'
    })
})
MB.addEventListener('mouseleave',function(){
    anime({
        targets:AB,
        opacity:0,
        translateX:0,
        duration:500,
        easing:'linear'
    })
})

TL.addEventListener('mouseenter',function(){
    anime({
        targets:TL,
        translateY:-25,
        duration: 500,
        easing:'easeInOutExpo'
    })
})
TL.addEventListener('mouseleave',function(){
    anime({
        targets:TL,
        translateY:0,
        duration: 500,
        easing:'linear'
    })
})

BR.addEventListener('mouseenter',function(){
    anime({
        targets:BR,
        translateY:-25,
        duration: 500,
        easing:'easeInOutExpo'
    })
})
BR.addEventListener('mouseleave',function(){
    anime({
        targets:BR,
        translateY:0,
        duration: 500,
        easing:'linear'
    })
})
TR.addEventListener('mouseenter',function(){
    anime({
        targets:TR,
        translateY:-25,
        duration: 500,
        easing:'easeInOutExpo'
    })
})
TR.addEventListener('mouseleave',function(){
    anime({
        targets:TR,
        translateY:0,
        duration: 500,
        easing:'linear'
    })
})

BL.addEventListener('mouseenter',function(){
    anime({
        targets:BL,
        translateY:-25,
        duration: 500,
        easing:'easeInOutExpo'
    })
    anime({
        targets:II,
        translateY:-25,
        duration: 500,
        easing:'easeInOutExpo'
    })
})
BL.addEventListener('mouseleave',function(){
    anime({
        targets:BL,
        translateY:0,
        duration: 500,
        easing:'linear'
    })
    anime({
        targets:II,
        translateY:0,
        duration: 500,
        easing:'linear'
    })
})