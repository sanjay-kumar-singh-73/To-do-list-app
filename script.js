let inputes = document.getElementById("input");
let text = document.querySelector(".text");

function Add(){
    if(inputes.value == ""){
       alert("Please Enter Your Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputes.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputes.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove();
        }
    }
    
}
