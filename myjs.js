// calling div for skills section
let tablink=document.querySelectorAll(".tab-links");
let tabcontent=document.querySelectorAll(".tab-content");
function opentab(tabname){
    for(tab of tablink){
        tab.classList.remove("active-link");

    }
    for(tab of tabcontent){
        tab.classList.remove("active-tab");
        
    }
   event.currentTarget.classList.add("active-link");
   let currentTab=document.getElementById(tabname);
   currentTab.classList.add("active-tab");
}

// autotype animation
var typed = new Typed(".auto-type", {
    strings:["Design Dynamically","Develop Diligently"," Create Innovatively","Code Creatively"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

// -----menubar----

var sidemenu= document.querySelector("#sidemenu");
var nav=document.querySelector(".nav")
function openmenu(){
    sidemenu.style.right="0";
    nav.style.display="none"
}
function closemenu(){
    sidemenu.style.right="-200px";
    nav.style.display="block"
}


