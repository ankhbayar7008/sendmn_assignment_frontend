import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { EMPLOYEES_API_URL } from '../../constants';
import RegistrationModal from '../form/RegistrationModal';

class EmployeeDataTable extends Component {
    deleteItem = id => {
        let confirmDeletion = window.confirm('Want to delete employee? ');
        if (confirmDeletion)
            fetch(`${EMPLOYEES_API_URL}/${id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    this.props.deleteEmployee(id);
                })
                .catch(err => console.log(err));
    }
    render() {
        const items = this.props.items;
        return <div><Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {!items || items.length <= 0 ?
                    <tr>
                        <td colSpan="6" align="center"><b>No employees to list.</b></td>
                    </tr>
                    : items.map(item => (
                        <tr key={item.id}>
                            <th scope="row">
                                {item.id}
                            </th>
                            <td>
                                {item.firstName}
                            </td>
                            <td>
                                {item.lastName}
                            </td>
                            <td>
                                    <RegistrationModal 
                                        isNew={false}
                                        user={item}
                                    updateEmployee={this.props.updateState} /> {' '}
                                <Button outline color="danger" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
            <hr />
            </div>;
    }

}

export default EmployeeDataTable;