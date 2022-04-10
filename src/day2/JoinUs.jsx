import React from "react";

const JoinUs=()=>{
    return(
        <>
            <button id="join">JOIN US</button>
        </>
    )
}

let join = document.getElementById("join");
join.style.borderRadius="10px";
join.style.width="100px";
join.style.padding="2px 20px";
join.style.background="dodgerblue"
join.style.color="white";

export default JoinUs