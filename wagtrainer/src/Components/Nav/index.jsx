import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './index.css';

const Nav = () => {
    return (
        <>
            <nav className='nav'>
                <div id='mainNav'>
                    <Link className='navLink' to='/'>Main</Link>
                    <Link className='navLink' to='/register'>Register</Link>
                    <Link className='navLink' to='/as400'>AS400</Link>
                    <Link className='navLink' to='/generalOps'>General Operations</Link>
                    <Link className='navLink' to='/intercom'>Intercom +</Link>
                    <Link className='navLink' to='/telxon'>Telxon</Link>
                    <Link className='navLink' to='/storenet'>Storenet</Link>
                </div>
                <div id='portalNav'>
                    <Link className='navLink' id='portalLink' to='/portal'><IoPersonOutline id='profileIcon' /><p>Tech Portal</p></Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;