const openbtn = document.querySelector(".open-btn");
const clossbtn = document.querySelector(".closs-btn");
const menu = document.querySelector(".header-nav-menu");
openbtn.addEventListener("click", function(){

menu.style.display="flex";
openbtn.style.display="none"
clossbtn.style.display="flex"

});
clossbtn.addEventListener("click",function(){

    menu.style.display="none";
    openbtn.style.display="flex";
    clossbtn.style.display="none";
});
