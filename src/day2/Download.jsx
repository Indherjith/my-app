import React from "react";

const Download = () =>{
    return(
        <>
            <button id="down">DOWNLOAD</button>
        </>
    )
}

let down = document.getElementById("down");
down.style.width="100px";
down.style.borderRadius="10px";
down.style.background="peru";
down.style.padding="1px"
down.style.color="white";
down.style.marginLeft="20px";

export default Download