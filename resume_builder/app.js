( function(){ 
  const name=document.querySelector("#name");
  const new_name=document.querySelector(".name");
  const form=document.querySelector(".container");
  const resume=document.querySelector(".resume") 
  const  designation=document.querySelector(".designation");
  console.log(name);
  console.log(new_name);

submit.addEventListener("click",(e)=>{
    e.preventDefault();

     new_name.innerText=`${name.value}` 
    form.style.display="none";
    resume.style.display="block"

})
})();
