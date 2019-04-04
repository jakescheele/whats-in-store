import React, {Component} from "react";
import '../../../../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalBarSeries} from 'react-vis';


class SalesChart extends Component {
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
            <VerticalBarSeries data={data} />
          </XYPlot>
        </div>
      );
    }
  }








//import ReactDOM from "react-dom";

/*let getRandom = () => 600 * Math.random();

class SalesChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: getRandom()
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ x: getRandom() });
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleClick}>Update</button>
                </div>
                <svg width="800" height="100">
                <circle cx={this.state.x} cy="50" r="20" fill="#368F8B" />
                </svg>
            </div>
        )
    }

}*/

//ReactDOM.render(<Dot />, document.getElementById("root"));






/*class SalesChart extends Component {
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
          <XYPlot height={450} width={450} color="white">
            <VerticalBarSeries data={data} />
          </XYPlot>
        </div>
      );
    }
  }*/






  

export default SalesChart
