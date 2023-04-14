( 
   function(){ 
    const data=[
    {
    id:1,
    name:"Diya Shah",
    img:"01.jpg",
    discription:"These examples are programmatically compiled from various online sources to illustrate current usage of the word 'review.' Any opinions expressed in the examples do not represent those of Merriam-Webster or its editors",
    
    },
    {   
        id:2,
        name:"vanshi Shah",
        img:"02.jpg",
        discription:" I went to the showroom in Milford, CT and Mike Garcia helped me out through the whole process.He was very professional and with him something that could have b...",
        
        },
        {   
            id:3,
            name:"piyush shah",
            img:"03.jpg",
            discription:"Extremely long wait of over 2.5 hours from initial contact to Patrol arrival - mid morning on a weekday in Edinburgh the capital of Edinburgh for a Disabled dri..",
        
            },
            {  
                id:4,
                name:"trushna shah",
                img:"04.jpg",
                discription:"have just bought a Dacia Sandero Stepway after owning a Renault clio for 4 years. First time in an automatic and a slightly elevated position which were my r...",
                
                }
            
    
] 
const name=document.querySelector(".customer-name")
const img=document.querySelectorAll(".img-card")
let star=document.querySelector(".star")

const describe=document.querySelector(".customer-text")
let count=0;
const button=document.querySelectorAll(".btn");
console.log(button);
button.forEach((button) => {
   button.addEventListener('click',()=>{
    if(button.classList.contains('prevBtn')) 
    {   
        if(count<=0) 
        count=data.length-1;
        else
         count--; 
        name.innerText=data[count].name;
        console.log(data[count].star)
        describe.innerText=data[count].discription;
       img.setAttribute('src',`0${count+1}.jpg`);
       
    }
    else if(button.classList.contains('nextBtn')) 
    {   
        
        
        if(count>=data.length-1)
          count=0;
          else
          count++;
          name.innerText=data[count].name;
          describe.innerText=data[count].discription;
          img.setAttribute('src',`0${count+1}.jpg`)
    }
   }) 
    
});

}
)();


