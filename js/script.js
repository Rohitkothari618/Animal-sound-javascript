("strict user")
const box=document.querySelectorAll(".animal");
const audio0=new Audio("./dog.wav")
const audio1=new Audio("./cat.wav")
const audio2=new Audio("./bee.wav")
const audio3=new Audio("./lion.wav")
const audio4=new Audio("./bird.wav")
const audio5=new Audio("./no.wav")


setTimeout(() => {
    console.log("hy");
},2000) 

const text=document.querySelectorAll(".text");
for(let i=0;i<text.length;i++){
    text[i].addEventListener("click",()=>{
        if(box[i].id=="dog"){
            audio0.currentTime=0;
            audio0.play();
            
        }
         if(box[i].id=="cat"){
            audio1.currentTime=0;
            audio1.play();
        }
        if(box[i].id=="bee"){
            audio2.currentTime=0;

            audio2.play();
        }
        if(box[i].id=="lion"){
            audio3.currentTime=0;
            audio3.play();
        }
        if(box[i].id=="bird"){
            audio4.currentTime=0;
            audio4.play();
        }


    })
}

for(let i=0;i<box.length;i++){
    box[i].addEventListener("mousedown",(e)=>{
        box[i].classList.add("playing");
        if(box[i].id=="dog"){
            audio0.currentTime=0;
            audio0.play();
            
        }
         if(box[i].id=="cat"){
            audio1.currentTime=0;
            audio1.play();
        }
        if(box[i].id=="bee"){
            audio2.currentTime=0;

            audio2.play();
        }
        if(box[i].id=="lion"){
            audio3.currentTime=0;
            audio3.play();
        }
        if(box[i].id=="bird"){
            audio4.currentTime=0;
            audio4.play();
        }


    })
    
    
    box[i].addEventListener("mouseup",(e)=>
    {setTimeout(()=>{
        box[i].classList.remove("playing");
        if(box[i].id=="dog" ){
            audio0.pause();
        }
         if(box[i].id=="cat"){
            audio1.pause();
        }
        if(box[i].id=="bee"){
            audio2.pause();
        }
        if(box[i].id=="lion"){
            audio3.pause();
        }
        if(box[i].id=="bird"){
            audio4.pause();
        }
    },1000);
        
    })


}

const body=document.body;

body.addEventListener("keypress",(e)=>{
    console.log(e.key);

    if(e.key=="d"){
        audio0.play();
    }
  
    else if(e.key=="c"){
        audio1.play();
    }
    else if(e.key=="b"){
        audio2.play();
    }
    else if(e.key=="l"){
        audio3.play();
    }
    else if(e.key=="e"){
        audio4.play();
    }

    else{
        audio5.currentTime=0;
        audio5.play();

        alert("sorry don't have sound of that animal");

    }
    

}

)







