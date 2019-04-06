import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


function Banner(props) {
    return (<Jumbotron className="mb-5" fluid>
        <Container className="text-center">
        {props.children?(<>
        <div style={{"fontSize": "46pt", "fontWeight":"bold"}}>{props.pageName}</div>
        <h5>
            {props.instructions}
        </h5>
        <div>{props.children}</div>
        </>)
        :(<>
        <div style={{"fontSize": "46pt", "fontWeight":"bold"}}>{props.pageName}</div>
        <h5>
            {props.instructions}
        </h5>
        </>)}
            
        </Container>
    </Jumbotron>
    );
}

export default Banner;
