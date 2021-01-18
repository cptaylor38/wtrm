import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './index.css';

//To finish later. Current plan - have mock-up ui of register with button clicks that give a description of use cases. Need to add to header an unordered list of more specific and easy to navigate operations, i.e. returns, express pay and pass, etc.

const Register = () => {
    return (
        <div className='pageContainer'>
            <Jumbotron fluid>
                <Container fluid>
                    <h4 className="display-4">This module is to help understand the basic register functionality including: </h4>
                    <p className="lead">Understanding the Register UI with a quick overview of each button, etc.</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Register;