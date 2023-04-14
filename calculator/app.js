(function(){const theme=document.getElementById("theme")
const screen=document.querySelector(".screen")
const body=document.querySelector(".calculator")
const button=document.querySelectorAll(".btn")
const equal=document.querySelector(".btn-equal")

let count=1;
const clear=document.querySelector(".clear")
theme.addEventListener("click",(e)=>{
    e.preventDefault(); 
    if(!(count%2==0)){ 
    screen.style.backgroundColor="white"
    body.style.backgroundColor="black";
    screen.style.color="black"
    } 
    else{ 
        screen.style.backgroundColor="black"
        body.style.backgroundColor="white"; 
        screen.style.color="white"
    } 
    count++;
}) 
button.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let value=e.target.dataset.num;
        if(value!="="& value!="f")
        screen.value += value;
    })
})
equal.addEventListener('click',(e)=>{
    console.log(screen.value)
     if(screen.value === "")
     {
     screen.value="please enter"}
     else{
        let ans;
        ans=eval(screen.value);
        screen.value=ans;
     }
})

clear.addEventListener("click",(e)=>{
    screen.value="";
})

})();