import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import AssignmentDataTable from './dataTables/AssignmentDataTable';
import { EMPLOYEES_API_URL } from '../constants';


class Assignments extends Component {
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
                    <h3>Assignment List</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AssignmentDataTable items={this.state.items} />
                </Col>
            </Row>
        </Container>
    }
}

export default Assignments;
