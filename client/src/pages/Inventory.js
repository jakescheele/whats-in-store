import React from "react";
import Jumbotron from "../components/Jumbotron";
import ModalComponent from "../components/ProductCardDetailed";


function Inventory(){
    return(
        <Jumbotron pageName="INVENTORY" instructions="Click to view and edit products."/>
        <div className="App">
            <ModalComponent/>        
        </div>
    )
}
export default Inventory;
