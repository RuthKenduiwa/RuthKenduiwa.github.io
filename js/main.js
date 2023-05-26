const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky" , window.scroLLY > 100);
});

var navlist = document.getElementById("navlist");
var menu = document.getElementById("menu");
var clickCount = 0

menu.addEventListener("click",function(){
    clickCount++;
    if (clickCount == 1) {
      navlist.style.display = "block";
      console.log(clickCount)
    } else if (clickCount == 2) {
      navlist.style.display = "none";
      clickCount = 0; // Reset clickCount for future clicks
    }
})