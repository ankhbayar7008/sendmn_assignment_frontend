import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem, 
    NavLink
} from 'reactstrap';

class AppHeader extends Component {
	
	render() {
        return <Navbar color="dark" dark expand="md">
            <Nav className="" navbar>
                <NavItem>
                    <NavLink href="/">EMPLOYEES</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">REVIEWS</NavLink>
                </NavItem>
            </Nav>
        </Navbar>;
	}
}

export default AppHeader;