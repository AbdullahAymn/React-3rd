import React from "react";
import "./design.css";
import Button from "./Button";

function Design(){
    const s = require("./images/s.jpg")
    return(
        <>
        <div className="design">
        <div className="descont">
            <section className="img">
                <img src={s} />
                <div className="cir">
                    
                </div>

            </section>
            <section className="other">
                <h2>Design Perfection</h2>
                
                <p>We’re a small creative design studio based in New York, working with adventurous clients and providing Creative Concept, Branding, Graphic Design, Art Direction and Digital Communication services.</p>

                <p>ui from<a href="https://nicepage.com/html-templates/preview/turn-great-ideas-into-reality-1252002?device=desktop"> here</a></p>

                <Button text="learn more" />
            </section>

        </div>
        {/* <div className="cir">

        </div> */}
        </div>
        </>
    )
}

export default Design