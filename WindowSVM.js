let InfoH = document.querySelector('.InfoH2')
let InfoP = document.querySelector('.InfoP')
$(document).ready(function(){
    $('.slider').bxSlider();
  });
let EB = document.querySelector('.HoverAE')
let CB = document.querySelector('.HoverAC')
let BB = document.querySelector('.HoverAB')

EB.addEventListener('mouseenter',function(){
    InfoH.innerHTML = 'Economy'
    InfoP.innerHTML = '+ Economy food<br>+ Economy room<br>+ foodcourt'
})
CB.addEventListener('mouseenter',function(){
    InfoH.innerHTML = 'Comfort'
    InfoP.innerHTML = '+ Comfort food<br>+ Comfort room<br>+ Spa-Salon'
})
BB.addEventListener('mouseenter',function(){
    InfoH.innerHTML = 'Bisness'
    InfoP.innerHTML = '+ premium food<br>+ bisness room<br>+ swimming pool'
})

