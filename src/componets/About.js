import React from "react";
import "./about.css"

function About(){
    const f1 = require("./images/f1.jpg")
    const f2 = require("./images/f2.jpg")
    const f3 = require("./images/f3.jpg")

    return(
        <>

        <div className="aboutcont" id="about">
            <section className="img">
                <img src={f1} />

            </section>
            <section className="first">
                <div>
                    <h3>
                        about us
                    </h3>
                    <p>
                    We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.
                    </p>
                    <p>
                        ui from <a href="https://nicepage.com/html-templates/preview/turn-great-ideas-into-reality-1252002?device=desktop">here</a>
                    </p>

                </div>
                <img src={f2} />
            </section>
            <section className="second">
                <img src={f3} />
                <div>
                <i class="fa-solid fa-terminal"></i>
                <h3>Teamwork is the ability to work together toward a common vision.</h3>
                </div>
            </section>
        </div>
        </>
    )
}

export default About