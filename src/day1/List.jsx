import React from "react";

function Buttons(){
    return(
    <>
        <input id="inp" placeholder="Enter Number" onChange={()=>{
            console.log("changed");
            let input = document.getElementById("inp");
            let val = +input.value;
            if(val%2==0){
                input.style.color="red";
            }
            else{
                input.style.color="green";
            }
        }} /><br />
        <button onClick={()=>{
            let input = document.getElementById("inp");
            let val = +input.value;
            if(val == null){
                input.value = 1;
            }
            else{
                val+=1;
                input.value=val;
            }
            if(val%2==0){
                input.style.color="red";
            }
            else{
                input.style.color="green";
            }
        }}>Increment</button>
         <button onClick={()=>{
            let input = document.getElementById("inp");
            let val = +input.value;
            if(val == null || val==0){
                input.value = 0;
            }
            else{
                val-=1;
                input.value=val;
            }
            if(val%2==0){
                input.style.color="red";
            }
            else{
                input.style.color="green";
            }
        }}>Decrement</button>
        <button onClick={()=>{
            let input = document.getElementById("inp");
            let val = +input.value;
            if(val == null || val==0){
                input.value = 0;
            }
            else{
                val*=2;
                input.value=val;
            }
            if(val%2==0){
                input.style.color="red";
            }
            else{
                input.style.color="green";
            }
        }}>Double</button>    
    </>
    )
    
}

export default Buttons