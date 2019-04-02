import React from "react";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/LayoutForInventory.js";
import ProductModal from "../components/ProductCardDetailed";



function Inventory(){
    return(<>
        <Jumbotron pageName="INVENTORY" instructions="Click to view and edit products."/>
        <Layout/>
        <ProductModal />
    </>)
}

export default Inventory;
