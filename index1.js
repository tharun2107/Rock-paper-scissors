let users=0;
let comps=0;

choicess=document.querySelectorAll(".choice");
choicess.forEach(choice => {
    choice.addEventListener("click", () =>{     // adding event listener to evry el of arr of choicess
        const userchoice=choice.id;// retrives the id pf clicked choice;
       playgame(userchoice);
    })
    
});

const comppchoice =()=>{
    let arr=["rock","paper","scissors"];
   const randix=Math.floor(Math.random()*3);
   return arr[randix];
}
const drawgame =()=>{
    msgs.innerHTML="Match is Tied";
  msgs.style.backgroundColor="blue";
}
 const playgame=(userchoice)=>{
    const compchoice=comppchoice();
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let uwin=true; // define a variable and assume it as true;
        if(userchoice==="rock"){
            // c-choice are paper,scissors
            if(compchoice==="paper"){
                uwin=false;//checking compchoice is paper for uchoice rock;
            }
            else{
                uwin=true;//checking compchoice is scissors for uchoice rock;
            }
        }
        else if(userchoice==="paper"){ 
            // then c-choice may be rock,scissors
                if(compchoice==="rock"){
                    uwin=true;//checking compchoice is rock for uchoice paper;
                }
                else{
                    uwin= false; //checking compchoice is scissors for uchoice paper;
                }
        }
        else{   
         //now userchoice is scissors then comp are rock,paper
            if(compchoice==="rock"){
                uwin=false;//checking compchoice is rock for uchoice scissors;
            }
            else{
                uwin=true; //checking compchoice is paper for uchoice scissors;
            }
        }
        winner(uwin,userchoice,compchoice);
    }
 }
 const umsg = document.getElementById("user");
 const cmsg = document.getElementById("comp");
 const msgs=document.querySelector(".msgss");
 
 const winner = (uwin,userchoice,compchoice) => {
     if (uwin) {
         users++;
         umsg.innerHTML = users;
         msgs.innerHTML = "You win ! "+userchoice +" beats "+ compchoice ;
         msgs.style.backgroundColor="green";
     } else {
         comps++;
         cmsg.innerHTML = comps;
         msgs.innerHTML="You lose ! "+compchoice +" beats " +userchoice;
         msgs.style.backgroundColor="red";
     }
    
 }
 
