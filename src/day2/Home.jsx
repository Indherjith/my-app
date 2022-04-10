import React from "react";

const Home = () =>{
    return(
        <>
            <button id="home">HOME</button>
        </>
    )
}

let home = document.getElementById("home");
home.style.width="100px";
home.style.borderRadius="10px";
home.style.background="#ee4e96"
home.style.color="white";

export default Home