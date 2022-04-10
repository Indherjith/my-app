import React from "react";

const Settings = () =>{
    return(
        <>
            <button id="sett">SETTINGS</button>
        </>
    )
}

let sett = document.getElementById("sett");
sett.style.width="100px";
sett.style.borderRadius="10px";
sett.style.background="cadetblue"
sett.style.color="white";
sett.style.marginLeft="20px";

export default Settings