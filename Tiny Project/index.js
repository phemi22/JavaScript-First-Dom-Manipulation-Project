const button = document.getElementById("btn")

button.addEventListener("click", function(){
    if(button.classList.contains("btn1")){
        button.classList.remove("btn1")
        button.classList.add("btn2")
    }else{
        button.classList.remove("btn2")
        button.classList.add("btn1")
    }
})