// Here goes the Javascript code about The index.html file.

//Here is excecuted the open/close navigation menu function (responsive design)

const Menubtn = document.getElementById("Menubtn");
const menuContent = document.getElementById("menuContent");

Menubtn.addEventListener("click", function(){
    menuContent.classList.toggle("active");
})

//Here goes the validation form for the emergency chat

const emergencyChat = document.getElementById("emergencyChat");
const OpenBtn = document.getElementById("OpenBtn");
const CloseBtn = document.getElementById("CloseBtn");

//Open emergency chat
OpenBtn.addEventListener("click", function(e){
    e.preventDefault();
    emergencyChat.classList.add("open-form");
});
//Close emergency chat

CloseBtn.addEventListener("click", function(e){
    e.preventDefault();
    emergencyChat.classList.remove("open-form");
});
