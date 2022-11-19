let Cont = document.querySelector('.ButtonCont')
let Info = document.querySelector('.ButtonInfo')
let Arrow = document.querySelector('.Arrow1')
let Display3 = document.querySelector('.display3')

let minIconFacebook = document.querySelector('.minIconFacebook')
let minIconTelegram = document.querySelector('.minIconTelegram')
let minIconInstagram = document.querySelector('.minIconInstagram')
let minIconWatsApp = document.querySelector('.minIconWatsApp')

let MTD = document.querySelector('.MTD')
let VTD = document.querySelector('.VTD')
let STD = document.querySelector('.STD')

let MEOrder = document.querySelector('.MEOrder')
let MCOrder = document.querySelector('.MCOrder')
let MBOrder = document.querySelector('.MBOrder')

let VEOrder = document.querySelector('.VEOrder')
let VCOrder = document.querySelector('.VCOrder')
let VBOrder = document.querySelector('.VBOrder')

let SEOrder = document.querySelector('.SEOrder')
let SCOrder = document.querySelector('.SCOrder')
let SBOrder = document.querySelector('.SBOrder')

document.onselectstart=new Function("return false");
document.ondragstart=new Function("return false");
minIconFacebook.addEventListener('mouseenter',function(){
    anime({
        targets:minIconFacebook,
        opacity:0.6,
        duration:250,
        easing:'linear'
    })
})
minIconFacebook.addEventListener('mouseleave',function(){
    anime({
        targets:minIconFacebook,
        opacity:1,
        duration:250,
        easing:'linear'
    })
})

minIconTelegram.addEventListener('mouseenter',function(){
    anime({
        targets:minIconTelegram,
        opacity:0.6,
        duration:250,
        easing:'linear'
    })
})
minIconTelegram.addEventListener('mouseleave',function(){
    anime({
        targets:minIconTelegram,
        opacity:1,
        duration:250,
        easing:'linear'
    })
})

minIconInstagram.addEventListener('mouseenter',function(){
    anime({
        targets:minIconInstagram,
        opacity:0.6,
        duration:250,
        easing:'linear'
    })
})
minIconInstagram.addEventListener('mouseleave',function(){
    anime({
        targets:minIconInstagram,
        opacity:1,
        duration:250,
        easing:'linear'
    })
})

minIconWatsApp.addEventListener('mouseenter',function(){
    anime({
        targets:minIconWatsApp,
        opacity:0.6,
        duration:250,
        easing:'linear'
    })
})
minIconWatsApp.addEventListener('mouseleave',function(){
    anime({
        targets:minIconWatsApp,
        opacity:1,
        duration:250,
        easing:'linear'
    })
})

SEOrder.addEventListener('mouseenter',function(){
    anime({
        targets:SEOrder,
        translateX: '25px',
        duration:500,
    })
})
SEOrder.addEventListener('mouseleave',function(){
    anime({
        targets:SEOrder,
        translateX: '0',
        duration:500,
    })
})
SCOrder.addEventListener('mouseenter',function(){
    anime({
        targets:SCOrder,
        translateX: '25px',
        duration:500,
    })
})
SCOrder.addEventListener('mouseleave',function(){
    anime({
        targets:SCOrder,
        translateX: '0',
        duration:500,
    })
})
SBOrder.addEventListener('mouseenter',function(){
    anime({
        targets:SBOrder,
        translateX: '25px',
        duration:500,
    })
})
SBOrder.addEventListener('mouseleave',function(){
    anime({
        targets:SBOrder,
        translateX: '0',
        duration:500,
    })
})
MEOrder.addEventListener('mouseenter',function(){
    anime({
        targets:MEOrder,
        translateX: '25px',
        duration:500,
    })
})
MEOrder.addEventListener('mouseleave',function(){
    anime({
        targets:MEOrder,
        translateX: '0',
        duration:500,
    })
})
MCOrder.addEventListener('mouseenter',function(){
    anime({
        targets:MCOrder,
        translateX: '25px',
        duration:500,
    })
})
MCOrder.addEventListener('mouseleave',function(){
    anime({
        targets:MCOrder,
        translateX: '0',
        duration:500,
    })
})
MBOrder.addEventListener('mouseenter',function(){
    anime({
        targets:MBOrder,
        translateX: '25px',
        duration:500,
    })
})
MBOrder.addEventListener('mouseleave',function(){
    anime({
        targets:MBOrder,
        translateX: '0',
        duration:500,
    })
})
VEOrder.addEventListener('mouseenter',function(){
    anime({
        targets:VEOrder,
        translateX: '25px',
        duration:500,
    })
})
VEOrder.addEventListener('mouseleave',function(){
    anime({
        targets:VEOrder,
        translateX: '0',
        duration:500,
    })
})
VCOrder.addEventListener('mouseenter',function(){
    anime({
        targets:VCOrder,
        translateX: '25px',
        duration:500,
    })
})
VCOrder.addEventListener('mouseleave',function(){
    anime({
        targets:VCOrder,
        translateX: '0',
        duration:500,
    })
})
VBOrder.addEventListener('mouseenter',function(){
    anime({
        targets:VBOrder,
        translateX: '25px',
        duration:500,
    })
})
VBOrder.addEventListener('mouseleave',function(){
    anime({
        targets:VBOrder,
        translateX: '0',
        duration:500,
    })
})
MTD.addEventListener('mouseenter',function(){
    anime({
        targets:MTD,
        
        scale:1.1,
        easing:'linear',
        duration:100
    })
})
MTD.addEventListener('mouseleave',function(){
    anime({
        targets:MTD,
        scale:1,
        easing:'linear',
        duration:100
    })
})
VTD.addEventListener('mouseenter',function(){
    anime({
        targets:VTD,
        scale:1.1,
        easing:'linear',
        duration:100
    })
})
VTD.addEventListener('mouseleave',function(){
    anime({
        targets:VTD,
        scale:1,
        easing:'linear',
        duration:100
    })
})
STD.addEventListener('mouseenter',function(){
    anime({
        targets:STD,
        scale:1.1,
        easing:'linear',
        duration:100
    })
})
STD.addEventListener('mouseleave',function(){
    anime({
        targets:STD,
        scale:1,
        easing:'linear',
        duration:100
    })
})
Arrow.addEventListener('click',function(){
    Display3.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
Arrow.addEventListener('mouseenter',function(){
    anime({
        targets:Arrow,
        scale:1.2,
        duration:250,
        easing:'linear'
    })
})
Arrow.addEventListener('mouseleave',function(){
    anime({
        targets:Arrow,
        scale:1,
        duration:250,
        easing:'linear'
    })
})
Cont.addEventListener('mouseenter',function(){
    
    anime({
        targets: Cont,
        opacity:0.6,
        duration:150,
        easing:'linear'
    })
})
Cont.addEventListener('mouseleave',function(){
    
    anime({
        targets: Cont,
        opacity:1,
        duration:150,
        easing:'linear'
    })
})


Info.addEventListener('mouseenter',function(){
    
    anime({
        targets: Info,
        opacity:0.6,
        duration:150,
        easing:'linear'
    })
})
Info.addEventListener('mouseleave',function(){
    
    anime({
        targets: Info,
        opacity:1,
        duration:150,
        easing:'linear'
    })
})
anime({
    targets:'.VenusGl',
    rotate:360,
    loop:true,
    easing:'linear',
    duration:15000
})

let Media425 = window.matchMedia('(max-width: 425px')
let ArrowDistable = querySelector('.Arrow1')
if (Media425.matches){
    ArrowDistable.disabled = true
}