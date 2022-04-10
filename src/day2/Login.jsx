import React from "react";

const Login = () =>{
    return(
        <>
            <button id="log">LOGIN</button>
        </>
    )
}

let log = document.getElementById("log");
log.style.width="100px";
log.style.borderRadius="10px";
log.style.background="goldenrod"
log.style.color="white";

export default Login