import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import DataTable from './DataTable';
import { EMPLOYEES_API_URL } from '../constants';


class Home extends Component {
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
                    <DataTable items={this.state.items} />
                </Col>
            </Row>
        </Container>
    }
}

export default Home;
