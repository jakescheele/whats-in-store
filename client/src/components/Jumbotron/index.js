import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import '../../index.css';


function Banner(props) {
    return (<Jumbotron className="mb-5" fluid>
        <Container className="text-center">
        {props.children?(<>
        <div className="jumbotronTitle">{props.pageName}</div>
        <div className="instructions">
            {props.instructions}
        </div>
        <div className="mt-3">{props.children}</div>
        </>)
        :(<>
        <div className="jumbotronTitle">{props.pageName}</div>
        <div className="instructions">
            {props.instructions}
        </div>
        </>)}
            
        </Container>
    </Jumbotron>
    );
}

export default Banner;
