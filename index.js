for(let i = 0; i<document.querySelectorAll("header a ").length; i++){
    document.querySelectorAll("header a ")[i].addEventListener("click" , ()=>{
        alert("hey");
    });
}

for(let i = 0; i<document.querySelectorAll(".measure-bar").length; i++){
    document.querySelectorAll(".measure-bar")[i].addEventListener("click", fillUp)//{
//     //     document.querySelectorAll(".measure-bar")[i].style.background = " green";
    
// });
}
function fillUp(e){
e.style = "background-color:green";
}

document.querySelector(".hamburger").addEventListener("click", function(){
    var menu = document.querySelector(".menu");
    var burger = document.querySelector(".hamburger");
    if(menu.style.display == "none"){
        menu.style.display = "flex";
        burger.style.background = "orange";
    }
    else{
         menu.style.display = "none";
         burger.style.background = "#171c5d";
    }
    
});
