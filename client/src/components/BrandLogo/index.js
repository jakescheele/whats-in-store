
import React from "react";


function BrandLogo(props) {
    return (<>
        <span id="brand">
         <img style={{"width":"120px", "height":"100%", "margin":"0px 0.5rem 0px 0.5rem","padding":"0px","object-fit":"scale-down"}} src={process.env.PUBLIC_URL + '/logo.png'}/>
            <span className="font">                
                {props.shopName?(<span style={{"color":"white", "fontSize":"24pt", "margin":"2rem 0rem 0px 0.5rem"}}> <i className="fas fa-times pr-2"></i> {props.shopName}</span>):("")}
            </span>
        </span> 
    </>)
}





export default BrandLogo;
