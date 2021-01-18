import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'reactstrap';
import './index.css';

const Overview = ({info}) => {
    return (
        <div>
           <Jumbotron className='ovJumbo'>
                <h1 className="display-3">{info.title}</h1>
                <p className="lead">{info.description}</p>
                <hr className="my-2" />
                <p>{info.specialNotes}</p>
                <p className="lead">
                    <Link to={info.link}><Button color="primary">Visit Page</Button></Link>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Overview;