(
    function()
    {

       const button=document.querySelectorAll(".Btn");
       let count=0;
       button.forEach((button)=>{
        button.addEventListener('click',()=>{
        if(button.classList.contains('prevBtn'))
         count--;
         else if(button.classList.contains('nextBtn'))
         count++;
         else if(button.classList.contains('reset'))
         count=0;
         const counter=document.querySelector('#counter')
         counter.textContent=count;
         if(count>0)
         {
            counter.style.color="#d64161"
         }
         else if(count<0)
         {
            counter.style.color="#ff7b25";
         }
       }) 
   })
     
     
    }
) ();