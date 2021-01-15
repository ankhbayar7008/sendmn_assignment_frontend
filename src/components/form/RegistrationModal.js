import React, { Component, Fragment, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RegistrationForm from './RegistrationForm';

class RegistrationModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    }


    render() {
        const isNew = this.props.isNew;

        let title = 'Edit Employee';
        let button = '';
        if (isNew) {
            title = 'Add Employee';
            button = <Button outline
                color="success"
                onClick={this.toggle}>Add Employee</Button>;
        } else {
            button = <Button outline
                color="warning"
                onClick={this.toggle}>Edit</Button>;
        }
        return <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    <RegistrationForm
                        createEmployee={this.props.createEmployee}
                        updateEmployee={this.props.updateEmployee}
                        toggle={this.toggle}
                        user={this.props.user} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
}
export default RegistrationModal;