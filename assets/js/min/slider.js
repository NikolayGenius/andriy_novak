let slider_item = document.querySelectorAll(".slider_item");
let next_btn = document.querySelector(".next_btn");
let previous_btn = document.querySelector(".previous_btn");
let slider_active_item =  document.querySelector(".slider_active_item");
let slider_show_1 =  document.querySelector(".slider_show_1");
let slider_show_3 =  document.querySelector(".slider_show_3");
let count_1 = 1;
let count_2 = 2;
let count_3 = 3;

    function showImg(count_1,count_2,count_3){
        slider_show_1.src = `./assets/img/del/snowbord_${count_1}.jpg`;
        slider_active_item.src = `./assets/img/del/snowbord_${count_2}.jpg`;        
        slider_show_3.src = `./assets/img/del/snowbord_${count_3}.jpg`;
    }     
    showImg(count_1,count_2,count_3);  
       
next_btn.addEventListener("click", function(){
    count_1++;
    count_2++;
    count_3++;
     
    if (count_1>slider_item.length ){
        count_1 = 1;
    }else if (count_2>slider_item.length ){   
        count_2 = 1;
    }
    else if ( count_3>slider_item.length){ 
        count_3 = 1; 
    }
   
    showImg(count_1,count_2,count_3);
    
    

})
previous_btn.addEventListener("click", function(){
    count_1--;
    count_2--;
    count_3--;
     
    if (count_1<=0){
        count_1 = slider_item.length;
    }else if (count_2<=0 ){     
        count_2 = slider_item.length;
    }
    else if ( count_3<=0){ 
        count_3 = slider_item.length; 
    }
   
    showImg(count_1,count_2,count_3);
   
    

})



