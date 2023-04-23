import React from "react";
import "./home.css" ;
import Button from "./Button";

function Home(){
    return(
        <>
        <div className="homecont">
            <div className="first">
                <h3>
                CREATIVE DESIGN AGENCY
                </h3>
                <h1>
                We live to turn great ideas
                </h1>
                <a href="https://www.facebook.com/Abdullah.Ayman.Yehya"  target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/3bdullah_ayman/" target="_blank"><i class="insta fa-brands fa-instagram"></i></a>
                
            </div>
            <div className="second">
                <p>
                We combine local knowledge with global expertise, strategy with design, empathy with creativity, meaning with magic. Reach out to discuss how we might help you accelerate change.
                </p>
                <h2>
                Duis aute irure dolor in reprehenderit
                </h2>

            <Button to="#" text="learn more" color={"pink"} />

            </div>


        </div>
        </>
    )
}

export default Home