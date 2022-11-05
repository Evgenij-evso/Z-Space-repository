let W = document.querySelector('.W')

window.addEventListener('mousemove',function(e){
    e = window.event
    var X = e.clientX
    var Y = e.clientY

    W.style.top = Y - 100 + 'px'
    W.style.left = X - 100 + 'px'
})