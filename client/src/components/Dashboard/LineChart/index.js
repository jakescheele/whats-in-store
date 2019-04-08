import React, {Component} from "react";
import '../../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, HorizontalGridLines, XAxis, YAxis} from 'react-vis';


class StockChart extends Component {
    render() {
      const data = [
        {x: 'Nov', y: 54},
        {x: 'Dec', y: 28},
        {x: 'Jan', y: 42},
        {x: 'Feb', y: 72},
        {x: 'Mar', y: 26},
        {x: 'Apr', y: 10},
      ];
      return (
        <div className="App">
          <XYPlot 
          // height={350} 
          // width={350} 
          color="white"
          xType="ordinal"
          >
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries 
            data={data} 
            color="white"
            strokeWidth = {"5px"}
            />
          </XYPlot>
        </div>
      );
    }
  }







export default StockChart
