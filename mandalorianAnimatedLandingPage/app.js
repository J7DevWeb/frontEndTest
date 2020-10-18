let yoda = document.getElementById("baby");
let mandalorian = document.getElementById("mandalorian");
let tatooine = document.getElementById("tatooine");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    
    yoda.style.top = value * 0.25 + 'px';
    mandalorian.style.top = value * 0.11 + 'px';
    tatooine.style.top = -value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    
})


