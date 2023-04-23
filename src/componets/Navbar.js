import react, { useState } from "react";
import "./nav.css";

function Navbar(){
    const[click , setClick] =useState(false);
    function showclose(){
        setClick(!click)
    }


    return(
        <>
            <div className="nav-but">
                <div className="logo"><a href="#">Logo</a></div>
                    <div className="icons">
                        <i class="fa fa-solid fa-bars" onClick={showclose}></i>
                        <a href="https://www.facebook.com/Abdullah.Ayman.Yehya" onClick={showclose} target="_blank"><i class="fb fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/3bdullah_ayman/" onClick={showclose} target="_blank"><i class="insta fa-brands fa-instagram"></i></a>
                </div>
            </div>
            
                
            <div className={click ? "nav-contat active" :"nav-contat"}>
                <section className="icon">
                <i class="fa-solid fa-xmark" onClick={showclose}></i>
                </section>

                <section className="items">
                    <a href="#" onClick={showclose}>Home</a>
                    <a href="#about" onClick={showclose}>About</a>
                    <a href="#contacts" onClick={showclose}>Contact</a>
                </section>
            </div>
        </>
    )
}

export default Navbar