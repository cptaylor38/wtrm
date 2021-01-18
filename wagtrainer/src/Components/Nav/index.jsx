import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import './index.css';

const SiteNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className='siteNav'>
                <NavbarBrand href="/" style={{color: 'rgb(189, 1, 1)', fontWeight: 'bold'}}>WAG Rx Hub</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className='siteNavLink' href="/">Main</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='siteNavLink' href="/register">Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='siteNavLink' href="/as400">AS400</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='siteNavLink' href="/generalOps">General Operations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='siteNavLink' href="/intercom">Intercom+</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='siteNavLink' href="/storenet">Storenet</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='siteNavLink' href="/portal">Tech Portal</NavLink>
                        </NavItem>
                    </Nav>
                <NavbarText>
                <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret className='profileToggle'>
                            <IoPersonOutline id='profileIcon' /><p>Profile</p>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Sign In
                            </DropdownItem>
                            <DropdownItem>
                                Sign Out
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavbarText>
            </Collapse>
        </Navbar>
    </div>
    )
}

export default SiteNav;
