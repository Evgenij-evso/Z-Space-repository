let W = document.querySelector('.W')
document.onselectstart=new Function("return false");
document.ondragstart=new Function("return false");
window.addEventListener('mousemove',function(e){
    e = window.event
    var X = e.clientX
    var Y = e.clientY

    W.style.top = Y - 100 + 'px'
    W.style.left = X - 100 + 'px'
})