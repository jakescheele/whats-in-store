import React from "react";
//import '../../App.css';


function BrandLogo(props) {
    return (
        <span id="brand">
            <div className="font">
                <a href="/"></a>
                {props.shopName?(<span style={{"color":"white", "fontSize":"24pt"}}> x {props.shopName}</span>):("")}
            </div>
        </span>
    )
}

//<img style="wisLogo" src={require('../img/logo.png')}></img>



export default BrandLogo;
