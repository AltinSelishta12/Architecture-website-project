// Here goes Javascript code for the index.html file

const nav = document.querySelector(".nav-items ul")

//This code adds a CSS class to the unordered list like animation when we have the cursor on the ul (unordered list)
nav.addEventListener("mouseover", function(){
    nav.classList.add("addShadow")
})

//This code removes that CSS class that has been used in the upper part of the code so when we move the cursor out the <ul> the animation will be removed
nav.addEventListener("mouseout", function(){
    nav.classList.remove("addShadow");
})

const MainMenu = document.querySelector("#MainMenu")
const OpenMenu = document.querySelector("#OpenMenu")
const CloseMenu = document.querySelector("#CloseMenu")

OpenMenu.addEventListener("click", function(e){
    e.preventDefault();
    MainMenu.classList.add("menu");
})

CloseMenu.addEventListener("click", function(){
    MainMenu.classList.remove("menu");
})


//Send Email input validation goes here
 const sendEmailForm = document.querySelector("#sendEmailForm");
 const email = document.querySelector("#email");
 const emailBtn = document.querySelector("#emailBtn");

 sendEmailForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(email.value.trim() === ""){
        alert("Please fill the empty input");
        return;
    }
    else if(!email.value.includes("@") || !email.value.includes(".")) {  //else if(!email.value.includes("@")) this controlls if there is not used @ and stops the form
        alert("Please use valid symbols");
        email.value = "";
        return;
    }
    alert("We will contact you as soon as we can.");
        email.value = "";
 })

 //Support textrea validation goes here
 const SupportForm = document.querySelector("#SupportForm");
 const textarea = document.querySelector("#SupportInput")
 const SendMessageBtn = document.querySelector("#sendMessageBtn");

 SupportForm.addEventListener("submit", function(stop){
    stop.preventDefault();

    if(textarea.value.trim() === ""){
        alert("Please fill the empty input");
        return;
    }
    else if(textarea.value.length < 12){
        alert("This input must contain at least 12 charachters");
        textarea.value = "";
    }
    else{
        alert("Thank you for cooperating with us we will reach you soon");
        textarea.value = "";
    }
 })

 