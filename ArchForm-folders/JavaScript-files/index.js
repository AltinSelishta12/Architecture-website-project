// Here goes the Javascript code about The index.html file.

//Here is excecuted the open/close navigation menu function (responsive design)

const Menubtn = document.getElementById("Menubtn");
const menuContent = document.getElementById("menuContent");

Menubtn.addEventListener("click", function(){
    menuContent.classList.toggle("active");
})

//Here goes the open/close form function for the emergency chat

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

// Here goes the validation of the emergency chat form

const emergencyForm = document.getElementById("emergencyForm");
const Name = document.getElementById("Name");
const TelNumber = document.getElementById("TelNumber");
const Email = document.getElementById("Email");
const MsgInput = document.getElementById("MsgInput");

emergencyForm.addEventListener("submit", function(Event){
    if(Name.value.trim() === "" || TelNumber.value.trim() === "" || Email.value.trim() === "" || MsgInput.value.trim() === "" ){
        Event.preventDefault();
        alert("Please fill the required fields");
    }
    //Checks if the Phone Number has the right symbol to be a valid number
    if(!TelNumber.value.startsWith("+")){
        Event.preventDefault();
        TelNumber.style.border = "1px solid red";
        TelNumber.value = "Use the (+) symbol";
        TelNumber.style.paddingLeft = "2%";

        setTimeout(() =>{
            TelNumber.style.border = "1px solid darkgray";
            TelNumber.value = "";
            TelNumber.style.paddingLeft = "2%";
        }, 2000);
    }
    //Checks if the Email has the right symbols to be a valid email
    if(!Email.value.includes("@") || !Email.value.includes("."))  {
        Event.preventDefault();
        Email.value = "Use the right symbols (@, .)";
        Email.style.paddingLeft = "2%";
        setTimeout(() =>{
            Email.value = "";
            Email.style.paddingLeft = "2%";
        }, 2000)
    }
})