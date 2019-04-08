import React, { Component } from "react";
import '../../../index.css';

class StoreAnimation extends Component {

    render() {
        return (
            <>
            <div class="fadein">
            <img class="f3" src={require('../../img/sequence3.png')} />
            <img class="f2" src={require('../../img/sequence2.png')} />
            <img class="f1" src={require('../../img/sequence1.png')} />
            </div>
            
            <img class="f4" src={require('../../img/sequence4.png')} />

    </>
        )
    }
}
export default StoreAnimation