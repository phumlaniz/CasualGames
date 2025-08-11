var menuIcon = document.querySelector(".menu_burger");
var sidebar = document.querySelector(".quick-access-bar");

menuIcon.onClick = function(){
    sidebar.classList.toggle("minimised-quick-access-bar");
}