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
e.style = "background-color:green"
}

