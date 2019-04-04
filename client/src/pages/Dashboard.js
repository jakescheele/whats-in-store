import React from "react";
import '../../node_modules/react-vis/dist/style.css';
import Nav from "../components/NavBar";
import SalesChart from "../components/Dashboard/SalesChart";

function Dashboard(){
    return(
        <>
        <Nav />
        <SalesChart />
        </>
    )
}

export default Dashboard;

