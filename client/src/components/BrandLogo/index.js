import React from "react";
//import '../../App.css';


function BrandLogo(props) {

    const shop = props.shop || {}
    return (<>
        <span id="brand">
         <img style={{"width":"120px", "height":"100%", "margin":"0px 0.5rem 0px 0.5rem","padding":"0px","objectFit":"scale-down"}} src={process.env.PUBLIC_URL + '/logo.png'}/>
            {shop.hasOwnProperty("logo")?
            (<span className="font text-light"> × <img style={{"width":"75px", "height":"75px", "margin":"0px 0.5rem 0px 0.5rem","padding":"0px","objectFit":"scale-down"}} src={shop.logo.logo_url}/></span>) 
            :(shop.shopName?
            (<span className="font" style={{"color":"white", "fontSize":"2vw", "margin":"2rem 0rem 0px 0.5rem"}}> × {shop.shopName}</span>)
            :(""))}
        </span> 
    </>)
}




export default BrandLogo;
