import React from "react";
//import '../../App.css';


function BrandLogo(props) {
    console.log(props.shop.shopName)
    return (<>
        <span id="brand">
         <img style={{"width":"120px", "height":"100%", "margin":"0px 0.5rem 0px 0.5rem","padding":"0px","objectFit":"scale-down"}} src={process.env.PUBLIC_URL + '/logo.png'}/>
            <span className="font">                
                {props.shop.shopName?(<span style={{"color":"white", "fontSize":"2vw", "margin":"2rem 0rem 0px 0.5rem"}}> <i className="fas fa-times pr-2"></i> {props.shop.shopName}</span>):("")}
            </span>
        </span> 
    </>)
}




export default BrandLogo;
