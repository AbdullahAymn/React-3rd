import React from "react";
import "./contact.css"

function Contact(){
    return(
        <>
        <div className="contactcont" id="contacts">
            <div className="contact">
            <section className="text">
                <h2>Contact Info</h2>
                <section>
                <i class="fa-solid fa-phone"></i>
                <p>+201015737609</p>

                </section>
                <section>
                <i class="fa-regular fa-envelope"></i>
                <p>abdullahayman40474@gmail.com</p>

                </section>


                <a href="https://www.facebook.com/Abdullah.Ayman.Yehya"  target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/3bdullah_ayman/" target="_blank"><i class="insta fa-brands fa-instagram"></i></a>
                
            </section>
            <section className="form">
                <input type="text" placeholder="Enter Your Namr"></input> 
                <input type="email" placeholder="Enter Your Email"></input>
                <textarea rows='4' cols="50" placeholder="Your message">
                </textarea> 
                <button>Send</button>

            </section>
            </div>
        </div>
        </>
    )
}

export default Contact