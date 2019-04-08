import React, { Component } from "react";
import '../../../index.css';

class StoreAnimation extends Component {

    render() {
        return (
            <div >
            <div className="fadein">
            <img className="f3" src={process.env.PUBLIC_URL + '/img/sequence3.png'} />
            <img className="f2" src={process.env.PUBLIC_URL + '/img/sequence2.png'} />
            <img className="f1" src={process.env.PUBLIC_URL + '/img/sequence1.png'} />
            <img className="f4" src={process.env.PUBLIC_URL + '/img/sequence4.png'} />
            </div>
            </div>
        )
    }
}
export default StoreAnimation