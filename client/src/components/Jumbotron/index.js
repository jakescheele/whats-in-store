import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import '../../index.css';


function Banner(props) {
    return (<Jumbotron className="mb-5" fluid>
        <Container className="text-center">
        {props.children?(<>
        <div class="modalHeader">{props.pageName}</div>
        <h5>
            {props.instructions}
        </h5>
        <div>{props.children}</div>
        </>)
        :(<>
        <div class="modalHeader">{props.pageName}</div>
        <div class="instructions">
            {props.instructions}
        </div>
        </>)}
            
        </Container>
    </Jumbotron>
    );
}

export default Banner;
