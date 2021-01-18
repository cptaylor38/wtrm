import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Overview from '../../Components/Overview';
import resourceList from '../../Assets/dataResources/resourceList.json';
import logo from '../../Assets/Images/walgreensLogo.png';

const Home = () => {
    return (
        <div className='pageContainer'>
            <section id='introSection'>
                <div id='introImg'>
                    <img src={logo} alt='Walgreens mortar logo' height='400px' width='400px'/>
                </div>
                <div id='introDescription'>
                    <h4>A community driven training and knowledge resource for Walgreens pharmacy techs on the various operations used daily.</h4>
                    <br />
                    <h6>Scroll down below to see a quick overview of the site's resources.</h6>
                </div>
            </section>
            <section id='siteOverviewSection'> 
                {resourceList.map(item => (<Overview info={item} key={item.id} />))}
            </section>
        </div>
    )
}

export default Home;