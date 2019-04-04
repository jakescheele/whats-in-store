import React, {Component} from "react";
import '../../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';


class StockChart extends Component {
    render() {
      const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 2},
        {x: 4, y: 6},
       
    
      ];
      return (
        <div className="App">
          <XYPlot height={400} width={400} color="white">
            <LineSeries data={data} />
          </XYPlot>
        </div>
      );
    }
  }

  export default StockChart