let nav_icon = document.querySelector(".nav_icon");
let wrap_nav_item = document.querySelector(".wrap_nav_item");
let nav_item = document.querySelectorAll(".nav_item");
let search_icon = document.querySelector(".search_icon");
let bag_icon = document.querySelector(".bag_icon");
let price = document.querySelector(".price");
let logo = document.querySelector(".logo");
// let header_wrap_content = document.querySelector(".header_wrap_content");

let checked = true;


nav_icon.addEventListener("click",function(){
   
    if (checked===true){
        // wrap_nav_item.style.display = "flex";

        wrap_nav_item.classList.remove("removeMenu");
        wrap_nav_item.classList.add("menu"); 

        wrap_nav_item.style.flexDirection = "column";
        search_icon.style.display = "none";
        bag_icon.style.display = "none";
        price.style.display = "none";
        logo.style.display = "none";
        

        checked=false;

        
        nav_item.forEach(function(elem){
            elem.classList.add("menu_item");
            elem.style.padding = "10px";
        })
        
        
    }else {
        // wrap_nav_item.style.display = "none";
        wrap_nav_item.classList.add("removeMenu");
        wrap_nav_item.classList.remove("menu"); 

         wrap_nav_item.style.flexDirection = "row";
        
         checked=true;
         search_icon.style.display = "block";
        bag_icon.style.display = "block";
        price.style.display = "block";
        logo.style.display = "block";
        wrap_nav_item.classList.remove("menu"); 
        nav_item.forEach(function(elem){
            elem.classList.remove("menu_item");
            elem.style.padding = "0px";
        })


    }


    

});

