import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


function Banner(props) {
    return (<Jumbotron className="mb-5" fluid>
        <Container className="text-center">
        {props.children?(<>
        <div style={{"fontSize": "46pt", "fontWeight":"bold"}}>{props.pageName}</div>
        <p>
            {props.instructions}
        </p>
        <div>{props.children}</div>
        </>)
        :(<>
        <h1>{props.pageName}</h1>
        <p>
            {props.instructions}
        </p>
        </>)}
            
        </Container>
    </Jumbotron>
    );
}

export default Banner;
