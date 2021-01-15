import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Employees from './Employees';
import Reviews from './Reviews';
import Assignments from './Assignments';


class AppHeader extends Component {
	
	render() {
        return (
            <Router>
                <Navbar color="light" expand="md">
                    <Nav className="" navbar>
                        <NavItem>
                            <NavLink href="/">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/employees">EMPLOYEES</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/employees">
                        <Employees />
                    </Route>
                    <Route path="/reviews">
                        <Reviews />
                    </Route>
                    <Route path="/assignments">
                        <Assignments />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
	}
}

export default AppHeader;