import React from "react";
import "./features.css"

function Features(){
    const p1 = require('./images/p1.jpg')


    return(

        <>
        <div className="fetucont">
            <h1>Key Features</h1>
            <h3>Sample text. Click to select the text box. Click again or double click to start editing the text.</h3>

            <div className="cont">
                <section className="im">
                    <img src={p1} />

                </section>
                <section className="ch">
                    <section className="first">
                    <i class="fa-solid fa-laptop-code"></i>
                    <h2>devlopments</h2>
                    </section>
                    <section>
                    <i class="fa-solid fa-briefcase"></i>
                    <h2>top skills</h2>
                    </section>
                    <section>
                    <i class="fa-solid fa-cubes"></i>
                    <h2>design</h2>
                    </section>
                    <section className="last">
                    <i class="fa-solid fa-laptop"></i>
                    <h2>responsive</h2>
                    </section>

                </section>
            </div>
        
        </div>
        
        </>
    )
}

export default Features