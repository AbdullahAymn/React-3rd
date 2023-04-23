import React, { useState } from "react";
import Button from "./Button";
import "./gallery.css"

function Gallery(){
    const g1 = require("./images/g1.jpg")
    const g2 = require("./images/g2.jpg")
    const g3 = require("./images/g3.jpg")
    const g4 = require("./images/g4.jpg")
    const g5 = require("./images/g5.jpg")
    const g6 = require("./images/g6.jpg")

    

    const images = [g1 ,g1, g2,g3 , g4 ,g5 ,g6]
    // const imagesre = [g6 ,g5 ,g4 ,g3 ,g2 ,g1]

    // const [img , setImg] = useState()

    const [setim , setSetim] = useState()

    const next=() => {
        if(setim < 6 ){
            setSetim(setim+1)
          }
          else{
            setSetim(1)
          }


    }
    const bervios=() => {
        if(setim > 1 ){
            setSetim(setim - 1)
          }
          else{
            setSetim(6)
          }


    }
    return(
        <>
        <div className="gallerycont" id="contact">
            <div className="gllery">
                <img src={g1} onClick = {() => {
                    setSetim(1);
                     
                }} />
                <img src={g2} onClick = {() => {
                    setSetim(2);
                     
                }}/>
                <img src={g3} onClick = {() => {
                    setSetim(3);
                     
                }}/>
                <img src={g4} onClick = {() => {
                    setSetim(4);
                     
                }}/>
                <img src={g5} onClick = {() => {
                    setSetim(5);
                     
                }}/>
                <img src={g6} onClick = {() => {
                    setSetim(6); 
                }}/>

            
            <section className="other">
                <h2>Our Portfolio</h2>
                
                <p>We’re a small creative design studio based in New York, working with adventurous clients and providing Creative Concept, Branding, Graphic Design, Art Direction and Digital Communication services.</p>

                <p>ui from<a href="https://nicepage.com/html-templates/preview/turn-great-ideas-into-reality-1252002?device=desktop"> here</a></p>

                <Button text="learn more" />
            </section>
            </div>
            
            {setim&&<div className="view">
            <i class="fa-solid fa-angle-right" onClick={next}></i>
                <i class="fa-solid fa-angle-left" onClick={bervios}></i>
                <section>
                    <img src={images[setim]} />
                </section>
                <i class="fa-solid fa-xmark" onClick = {() => {
                    setSetim(); 
                }}></i>
                

            </div>}

        </div>
        </>

    )
}
 

export default Gallery