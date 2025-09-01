// Here goes the Javascript code about The index.html file.

//Here is excecuted the open/close navigation menu function (responsive design)

const Menubtn = document.getElementById("Menubtn");
const menuContent = document.getElementById("menuContent");

Menubtn.addEventListener("click", function(){
    menuContent.classList.toggle("active");
})