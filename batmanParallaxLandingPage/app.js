document.addEventListener("mousemove", function(e){
    const bg = document.querySelector(".bg");
    const bat = document.querySelector(".bat");
    const content = document.querySelector(".content");
    
    bg.style.width = 100 + e.pageX/100 + '%';
    bg.style.height = 100 + e.pageX/100 + '%';
    
    bat.style.right = 100 + e.pageX/2 + 'px';
    
    content.style.left = 100 + e.pageX/2.5 + 'px';
})