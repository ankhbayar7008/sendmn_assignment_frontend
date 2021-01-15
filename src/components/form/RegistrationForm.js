import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { EMPLOYEES_API_URL } from '../../constants';
class RegistrationForm extends React.Component {
	state = {
		id: 0,
		firstName: '',
		lastName: ''
	}

	componentDidMount() {
		if (this.props.employee) {
			const { id, firstName, lastName } = this.props.employee
			this.setState({ id, firstName, lastName });
		}
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

    submitNew = e => {
        e.preventDefault();
        fetch(`${EMPLOYEES_API_URL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
        })
            .then(res => res.json())
            .then(user => {
                this.props.createEmployee(user);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }

    submitEdit = e => {
        e.preventDefault();
        fetch(`${EMPLOYEES_API_URL}/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateEmployee(this.state.id);
            })
            .catch(err => console.log(err));
    }

    render() {
        return <Form onSubmit={this.props.employee ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="firstName">First Name:</Label>
                <Input type="text" name="firstName" onChange={this.onChange} value={this.state.firstName === '' ? '' : this.state.firstName} />
            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last Name:</Label>
                <Input type="text" name="lastName" onChange={this.onChange} value={this.state.lastName === null ? '' : this.state.lastName} />
            </FormGroup>
            <Button>Save</Button>
        </Form>;
    }
}

export default RegistrationForm;