// Projects page array functions


const images = [
    {src:"../../ArchForm-folders/website-images/projects-images/interior-1-img.jpeg", category: "Interior", alt:"Interior 1"},
    {src:"../../ArchForm-folders/website-images/projects-images/interior-2-img.jpeg", category: "Interior", alt:"Interior 2"},
    {src:"../../ArchForm-folders/website-images/projects-images/interior-3-img.jpeg", category: "Interior", alt:"Interior 3"},
    {src:"../../ArchForm-folders/website-images/projects-images/interior-4-img.jpeg", category: "Interior", alt:"Interior 3"},
    {src:"../../ArchForm-folders/website-images/projects-images/exterior-1-img.jpeg", category: "Exterior", alt:"Exterior 1"},
    {src:"../../ArchForm-folders/website-images/projects-images/exterior-2-img.jpeg", category: "Exterior", alt:"Exterior 2"},
    {src:"../../ArchForm-folders/website-images/projects-images/exterior-3-img.jpeg", category: "Exterior", alt:"Exterior 3"},
    {src:"../../ArchForm-folders/website-images/projects-images/exterior-4-img.jpeg", category: "Exterior", alt:"Exterior 4"},
    {src:"../../ArchForm-folders/website-images/projects-images/landscape-img-1.jpeg", category: "landscape", alt:"landscape 1"},
    {src:"../../ArchForm-folders/website-images/projects-images/landscape-img-2.jpeg", category: "landscape", alt:"landscape 2"},
    {src:"../../ArchForm-folders/website-images/projects-images/landscape-img-3.jpeg", category: "landscape", alt:"landscape 3"},
    {src:"../../ArchForm-folders/website-images/projects-images/landscape-img-4.jpeg", category: "landscape", alt:"landscape 4"},
    {src:"../../ArchForm-folders/website-images/projects-images/urbanSpace-img-1.jpeg", category: "UrbanSpace", alt:"UrbanSpace 1"},
    {src:"../../ArchForm-folders/website-images/projects-images/urbanSpace-2-img.jpeg", category: "UrbanSpace", alt:"UrbanSpace 2"}

];
//This is the Interior array images
window.addEventListener("DOMContentLoaded", function(){
    const gallery = document.getElementById("gallery");

    const interior = images.filter(img => img.category === "Interior");
    const INTERIOR = interior.map(img => `<img class="gallery-img" src="${img.src}" alt="${img.alt}" style="width:98%; height:98%; border-radius: 15px;">`).join("");
    gallery.innerHTML = INTERIOR;
});

//This is the Exterior array images
const Exterior = document.getElementById("Exterior");

Exterior.addEventListener("click", function(event){
    const gallery = document.getElementById('gallery');
    event.preventDefault();
    const exterior = images.filter(img => img.category === "Exterior");
    const EXTERIOR = exterior.map(img => `<img class="gallery-img" src="${img.src}" alt="${img.alt}" style="width:98%; height:98%; border-radius: 15px;">`).join("");

    gallery.innerHTML = EXTERIOR;

});


//This is landscape array images
const Landscape = document.getElementById("Landscape");
Landscape.addEventListener("click", function(event){
    const gallery = document.getElementById("gallery");

    event.preventDefault();
    const landscape = images.filter(img => img.category === "landscape");
    const LANDSCAPE = landscape.map(img => `<img class="gallery-img" src="${img.src}" alt="${img.alt}" style="width:98%; height:98%; border-radius: 15px;">`).join("");

    gallery.innerHTML = LANDSCAPE;

});

//Display the alert of Renovation array images
const Renovation = document.getElementById("Renovation");

Renovation.addEventListener("click", function(event){
    alert("Coming Soon");

    event.preventDefault();
})

//This is urban Spaces array images

UrbanSpace.addEventListener("click", function(event){
     const gallery = document.getElementById("gallery");

    event.preventDefault();
    const urbanSpaces = images.filter(img => img.category === "UrbanSpace");
    const URBANSPACE = urbanSpaces.map(img => `<img class="gallery-img" src="${img.src}" alt="${img.alt}" style="width:98%; height:98%; border-radius: 15px;">`).join("");

    gallery.innerHTML = URBANSPACE;
})

    const smallTitle = document.getElementById("smallTitle");
    const navContent = document.getElementById("navContent");
    const smallMenuBtn = document.getElementById("smallMenuBtn");

    smallMenuBtn.addEventListener("click", function(){
        navContent.classList.toggle("active");
        smallTitle.classList.toggle("hide")
    })
