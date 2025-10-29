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