const jokeContainer=document.querySelector(".joke") 
console.log(jokeContainer);
const btn=document.querySelector(".btn")
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
const type=document.querySelector(".type")
let getJoke=()=>{
    jokeContainer.classList.remove("fade");
    fetch(url).then(data=>data.json()
    )
    .then(item=>{
        console.log(item)
        jokeContainer.textContent=`${item.joke||item.setup}`
        type.innerText=`${item.type}`
        console.log("hii")
        jokeContainer.classList.add("fade");
    })
}
btn.addEventListener("click",getJoke)
getJoke();