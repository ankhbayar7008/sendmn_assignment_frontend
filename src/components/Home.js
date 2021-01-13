import React, { Component } from 'react';
import { EMPLOYEES_API_URL } from '../constants';

import { Container, Card, CardTitle, CardText, Col, Row } from 'reactstrap';


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
        const items = this.props.items;

        return <Container style={{ paddingTop: "100px" }}>
            <Row>
                <Col>
                    <Card body inverse color="info">
                        <CardTitle>
                            Total Employees
                        </CardTitle>
                        <CardText style={{ textAlign: "right" }}>
                            <h2>15</h2>
                        </CardText>
                    </Card>
                </Col>
                <Col>
                    <Card body inverse color="primary">
                        <CardTitle>
                            Total Assignments
                        </CardTitle>
                        <CardText style={{ textAlign: "right" }}>
                            <h2>15</h2>
                        </CardText>
                    </Card>
                </Col>
                <Col>
                    <Card body inverse color="success">
                        <CardTitle>
                            Total Reviews
                        </CardTitle>
                        <CardText style={{ textAlign: "right" }}>
                            <h2>15</h2>
                        </CardText>
                    </Card>
                </Col>
            
                </Row>
        </Container>
    }
}

export default Home;
