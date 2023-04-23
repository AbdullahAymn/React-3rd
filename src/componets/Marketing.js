import React from "react";
import "./marketing.css"
import Button from "./Button";

function Marketing(){
    const s = require("./images/p.jpg")
    return(
        <>
        <div className="marketingcont">
            <div>
                <div className="marketing">
                <section>
                    <img src={s} />
                </section>
                <section className="other">
                <h2>Digital Marketing</h2>
                
                <p>We’re a small creative design studio based in New York, working with adventurous clients and providing Creative Concept, Branding, Graphic Design, Art Direction and Digital Communication services.</p>

                <p>ui from<a href="https://nicepage.com/html-templates/preview/turn-great-ideas-into-reality-1252002?device=desktop"> here</a></p>

                <Button text="learn more" />
            </section>
            </div>
            </div>

        </div>
        </>
    )
}

export default Marketing