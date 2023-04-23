import React from "react";
import "./button.css";



function Button({text , to ,color}){

    return(
        <div className="buttondiv">
            <a href={to} >
                <button className={color}>
                    {text}
                    
                </button> 
            
            </a>
        
        </div>
    )

}

export default Button