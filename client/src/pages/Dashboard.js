import React from "react";
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import SalesChart from "../components/Dashboard/SalesChart";

function Dashboard(){
    return(
        <SalesChart></SalesChart>
    )
}

export default Dashboard;

