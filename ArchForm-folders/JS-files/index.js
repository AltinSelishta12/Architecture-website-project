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


// Code for displaying the main buttons depending on the viewport height

 const mainButtons = document.querySelector("#mainButtons");

 window.addEventListener("scroll", function(){
    if(this.window.scrollY > 100){
        mainButtons.classList.add("active")
    }
    else{
        mainButtons.classList.remove("active")
    }
 })

//Responsive design open/close menu function

const MenuBtn = document.querySelector("#MenuBtn");

MenuBtn.addEventListener("click", function(){
    smallMenuItems.classList.toggle("ShowMenu")
})

//Mouseover and out animation added to the hero section btn
const BtnText = document.querySelector(".BtnText");

BtnText.addEventListener("mouseover", function(){
    BtnText.textContent = "View Projects";
})
BtnText.addEventListener("mouseout", function(){
    BtnText.textContent = "Explore Projects";
})