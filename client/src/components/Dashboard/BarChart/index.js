import React, {Component} from "react";
import '../../../../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';


class BarChart extends Component {
    render() {
      return (
        <div className="App">
          <XYPlot 
          height={400} 
          width={400} 
          xType="ordinal"
          stackBy="y"
          color="white">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries 
            data={this.props.data} />
          </XYPlot>
        </div>
      );
    }
  }

  export default BarChart