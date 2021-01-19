import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './index.css';

//To finish later. Current plan - have mock-up ui of register with button clicks that give a description of use cases. Need to add to header an unordered list of more specific and easy to navigate operations, i.e. returns, express pay and pass, etc.

const Register = () => {
    return (
        <div className='pageContainer'>
            <Jumbotron fluid id='registerNav'>
                <Container fluid>
                    <h4 className="display-5">This module is to help understand the basic register functionality including: </h4>
                    <div className='registerOverview'>
                        <a href="#returns" className="lead">Returns.</a>
                        <a href="#addingNonSystemItem" className="lead">Adding a non-system item.</a>
                        <a href="#express" className="lead">Express Pass and Express Pay.</a>
                        <a href="#fsa" className="lead">FSA Eligibility.</a>
                        <a href="#pseudophedrine" className="lead">Pseudophedrine.</a>
                        <a href="#storeUse" className="lead">Store Use Items</a>
                        <a href="#discounts" className="lead">Discounts</a>
                        <a href="#voids" className="lead">Voids</a>
                        <a href="#pagingCodes" className="lead">Paging Codes</a>
                    </div>
                </Container>
            </Jumbotron>
            <Container fluid className='registerContainer' id='returns'>
                <h3>Returns</h3>
                <h4>Prescriptions</h4>
                <h4>OTC and Store Items</h4>
            </Container>
            <Container fluid className='registerContainer' id='addingNonSystemItem'>
                <h3>Non-System Items</h3>
                <h4>Pharmacy Specific Non-Registered Items</h4>
                <h4>Non-Registered Front Store Items</h4>
            </Container>
            <Container fluid className='registerContainer' id='express'>
                <h3>Express Pass and Express Pay</h3>
                <h4>Understanding the difference between Express Pass and Express pay</h4>
                <h4>Express Pass Processing</h4>
                <h4>Express Pay</h4>
                <h5>How to know if a patient has Express Pay</h5>
                <h5>How to process Express Pay</h5>
                <h5>How to update Express Pay</h5>
                <h4>Express Pass</h4>
                <h5>How to process Express Pass</h5>
                <h5>How does a patient register for Express Pass</h5>
            </Container>
            <Container fluid className='registerContainer' id='fsa'>
                <h3>FSA</h3>
                <h4>How to tell if an item is FSA Eligible</h4>
            </Container>
            <Container fluid className='registerContainer' id='pseudophedrine'>
                <h3>Pseudophedrine</h3>
                <h4>How to ring up (Behind the counter) Pseudophedrine products</h4>
                <h4>Federal Pseudophedrine regulations and calculation</h4>
                <h4>Note: If a patient has a Pseudophedrine product called in as a prescription they can bypass the normal Pseudophedrine process and get more than the federal or state regulated amount.</h4>
            </Container>
            <Container fluid className='registerContainer' id='storeUse'>
                <h3>Store Use</h3>
                <h4>Note: Employees coded as Shift Leads, ASM's, Pharmacists, and Store Managers will be required to authorize a store use item.</h4>
                <h4>What kind of items do we typically store use?</h4>
            </Container>
            <Container fluid className='registerContainer' id='discounts'>
                <h3>Discounts</h3>
                <h4>Where to find discounts on the register:</h4>
            </Container>
            <Container fluid className='registerContainer' id='voids'>
                <h3>Void Operations</h3>
                <h4>Void Transaction:</h4>
                <h4>Void Item:</h4>
            </Container>
            <Container fluid className='registerContainer' id='pagingCodes'>
                <h3>Paging Codes</h3>
                <h4>IC3</h4>
                <h4>Code 1</h4>
                <h4>Code 2</h4>
                <h4>Code 5</h4>
            </Container>
        </div>
    )
}

export default Register;