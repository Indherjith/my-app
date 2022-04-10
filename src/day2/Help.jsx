import React from "react";

const Help = () =>{
    return(
        <>
            <button id="help">HELP</button>
        </>
    )
}

let help = document.getElementById("help");
help.style.width="100px";
help.style.borderRadius="10px";
help.style.background="darkslategrey";
help.style.padding="1px"
help.style.color="white";
help.style.marginLeft="20px";

export default Help