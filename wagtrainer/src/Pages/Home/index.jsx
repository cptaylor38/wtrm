import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Overview from '../../Components/Overview';
import resourceList from '../../Assets/dataResources/resourceList.json';

const Home = () => {
    return (
        <div className='pageContainer'>
            <section id='introSection'>
                <div>
                    <img src={require("../../Assets/Images/walgreensLogo.png")} alt='Walgreens mortar logo' />
                </div>
                <div>
                    <p>A community driven training and knowledge resource for Walgreens pharmacy technicians.</p>
                    <p>Scroll down below to see a quick overview of the site's resources.</p>
                </div>
            </section>
            <section id='siteOverviewSection'> 
                {resourceList.map(item => (<Overview info={item} key={item.id} />))}
            </section>
        </div>
    )
}

export default Home;