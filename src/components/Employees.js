import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import EmployeeDataTable from './dataTables/EmployeeDataTable';
import { EMPLOYEES_API_URL } from '../constants';
import RegistrationModal from './form/RegistrationModal';


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

    addEmployeeToState = employee => {
        this.setState(previous => ({
            items: [...previous.items, employee]
        }));
    }

    updateState = (id) => {
        this.getItems();
    }

    deleteEmployee = id => {
        const updated = this.state.items.filter(item => item.id !== id);
        this.setState({ items: updated })
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
                    <EmployeeDataTable items={this.state.items}
                        updateState={this.updateState}
                        deleteEmployee={this.deleteEmployee} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <RegistrationModal isNew={true} addEmployeeToState={this.addEmployeeToState} />
                </Col>
            </Row>
        </Container>
    }
}

export default Employees;
