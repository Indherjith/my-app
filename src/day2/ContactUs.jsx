import React from "react";

const ContactUs = () =>{
    return(
        <>
            <button id="con">CONTACT US</button>
        </>
    )
}

let con = document.getElementById("con");
con.style.width="100px";
con.style.borderRadius="10px";
con.style.background="brown";
con.style.padding="1px"
con.style.color="white";
con.style.marginLeft="20px";

export default ContactUs