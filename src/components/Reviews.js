import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReviewDataTable from './dataTables/ReviewDataTable';
import { EMPLOYEES_API_URL } from '../constants';


class Reviews extends Component {
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
                    <h3>Review List</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReviewDataTable items={this.state.items} />
                </Col>
            </Row>
        </Container>
    }
}

export default Reviews;
