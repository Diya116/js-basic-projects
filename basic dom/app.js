(function()
{ 
    console.log("button clicked");
    const form=document.querySelector("form");
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const feedback=document.querySelector(".feedback");
      const message=document.querySelector(".message-content")
      const messagecontent=document.querySelector("#message");
      if(messagecontent.value==="") 
      {  

         feedback.classList.add('show') 
         feedback.innerText='please enter message!!!'
        feedback.style.backgroundColor =" #ffb6c1"
          setTimeout(()=>{
            feedback.classList.remove('show')
          },5000)
      } 
      else
      {
        message.textContent=messagecontent.value;
        messagecontent.value=""; 
        feedback.classList.add('show')
        feedback.innerText='message susscessfully sent'
        feedback.style.backgroundColor =" #66ffcc"
          setTimeout(()=>{
            feedback.classList.remove('show')
          },5000)
      }
    })
})()

