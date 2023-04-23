import React from 'react';
import ReactDom from 'react-dom';
import "./App.css"
import Navbar from "./componets/Navbar.js"
import Home from "./componets/Home.js"
import Features from "./componets/Features.js"
import What from "./componets/What.js"
import Design from "./componets/Design.js"
import Divs from "./componets/Divs.js"
import About from "./componets/About.js"
import Marketing from "./componets/Marketing.js"
import Gallery from "./componets/Gallery.js"
import Contact from "./componets/Contact.js"
import Footer from "./componets/Footer"




function Project(){
  document.title='Abdullah'
  return(
    <>
    <Navbar />
    <Home />
    <Features/>
    <What />
    <Design />
    <Divs />
    <About />
    <Marketing />
    <Gallery />
    <Contact />


    <Footer />
    
    </>

  );
}

ReactDom.render(<Project />, document.getElementById('root'));