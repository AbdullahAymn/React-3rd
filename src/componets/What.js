import React from "react";
import "./what.css";

function What(){
    const a = require('./images/a.png')
    return(

        <>
        <div className="Whatcont">
            <h1>What We Do</h1>
            <p>In mollis nunc sed id semper risus in hendrerit gravida. Aliquet enim tortor at auctor urna nunc id cursus. Risus at ultrices mi tempus imperdiet. Sapien pellentesque habitant morbi tristique senectus et netus. Id cursus metus aliquam eleifend mi in. Quis commodo odio aenean sed. Sollicitudin ac orci phasellus egestas tellus. Id velit ut tortor pretium.</p>
            <img src={a} />
        </div>
       </>
    )
}

export default What;