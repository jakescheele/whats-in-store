
import React from "react";


function BrandLogo(props) {
    return (
        <span id="brand">
            <div className="font">
                <a href="/">WiS</a>
                {props.shopName?(<span style={{"color":"white", "fontSize":"24pt"}}> x {props.shopName}</span>):("")}
                
            </div>
        </span>
    )
}





export default BrandLogo;
