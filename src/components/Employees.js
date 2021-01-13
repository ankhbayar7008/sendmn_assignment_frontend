import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import EmployeeDataTable from './dataTables/EmployeeDataTable';
import { EMPLOYEES_API_URL } from '../constants';


class Employees extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        this.getItems();
    }

    getItems = () => {
        fetch(EMPLOYEES_API_URL)
            .then(res => res.json())
            .then(res => this.setState({ items: res }))
            .catch(err => console.log(err));
    }

    render() {
        return <Container style={{ paddingTop: "100px" }}>
            <Row>
                <Col>
                    <h3>Employee List</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EmployeeDataTable items={this.state.items} />
                </Col>
            </Row>
        </Container>
    }
}

export default Employees;
