let sidebar = document.querySelector(".small-sidebar");
let overlay = document.querySelector(".overlay");
let menubtn = document.querySelector(".menu");
let hidebtn = document.querySelector(".hide-option");

menubtn.addEventListener("click", function(){
    sidebar.style.transform = "translateX(0%)";
    overlay.style.display = "block";
});
hidebtn.addEventListener("click", function(){
    sidebar.style.transform = "translateX(-100%)";
    overlay.style.display = "none";
});
overlay.addEventListener("click",function(){
    sidebar.style.transform = "translateX(-100%)";
    overlay.style.display = "none";
});