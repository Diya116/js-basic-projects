// (
//     function()
//     {
//         const input1=document.querySelector(".input1")   
//         const input2=document.querySelector(".input2")
//         const submit=document.querySelector(".submit") 
//         let count=0;
//         const check_flames=(val1,val2)=>{
//             val1=val1.split('');
//             val2=val2.split('');
          
//             console.log(val1)
//             console.log(val2);
            
//               for(let i=0;i<val1.length && i<val2.length;i++)
//               {
//                  for(let j=0;j<val2.length && i<val1.length;j++)
//                  { 
//                     if(undefined!=undefined)
//                     {
//                     if(val1[i]==val2[j])
//                     {  
                
//                         //  delete val1[i];
//                         // delete val2[j];
//                         val1[i].innerText="*"
//                         val2[j].innerText="*"
//                         console.log(`${val1[i]} and ${val2[j]} are same`) 
//                         count++;
//                     } 
//                  }
//                 }
//               }
//              console.log(`count is ${count}`);
//         }
//         submit.addEventListener("click",(e)=>{
//             e.preventDefault();
//             // console.log(input1.value)
//             // console.log(input2.value);
//             check_flames(input1.value,input2.value);
//             console.log(input1.value.length)
//             console.log(input2.value.length)

//         })
//     }
    
// )();

(
    function()
    {
        const input1=document.querySelector(".input1")   
        const input2=document.querySelector(".input2")
        const submit=document.querySelector(".submit") 
        const flame=[
            "friends" ,"lover","affection","marriage","enemy"
        ]
        let ans=document.querySelector(".output")
        submit.addEventListener("click",(e)=>{
     e.preventDefault();
            let yourname=input1.value;
            let crushname=input2.value;
            let bothname=yourname+crushname;
            const sortarray=[...bothname].sort();
            const repeat=[];
          for(let i=0;i<sortarray.length-1;i++){
            if(sortarray[i]==sortarray[i+1])
            {
             repeat.push(sortarray[i]) 
             i++; 
            }
            }
            let repeat_length=repeat.length;
            console.log(repeat)
            console.log(repeat_length);
             console.log(flame[repeat_length]);
             
           
                ans.innerText=flame[repeat_length]; 
                ans.className="visible"
             
            
        
        })
    }
) ();