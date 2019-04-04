import React from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/NavBar";
import Table from "../components/PromosManagement/FlashSale/ProductCardForFlashSale";


function Promos(){
    return(<>
    <Nav/>
    <Jumbotron pageName="PROMOTIONALS" instructions="Edit your promotion settings."/>
    <Table/>
    </>)
}

export default Promos;
