import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
//import { EMPLOYEES_API_URL } from '../../constants';

class EmployeeDataTable extends Component {
    render() {
        const items = this.props.items;
        return <div><Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Reviews</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {!items || items.length <= 0 ?
                    <tr>
                        <td colSpan="6" align="center"><b>No Users yet</b></td>
                    </tr>
                    : items.map(item => (
                        <tr key={item.employeeCode}>
                            <th scope="row">
                                {item.employeeCode}
                            </th>
                            <td>
                                {item.firstName}
                            </td>
                            <td>
                                {item.lastName}
                            </td>
                            <td>
                                {item.reviews}
                            </td>
                            <td>
                                <Button outline color="warning" onClick={() => this.editItem(item.id)}>Edit</Button> {' '}
                                <Button outline color="danger" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
            <hr />
            <Button outline color="success" onClick={() => this.createItem()}>Add Employee</Button>
            </div>;
    }

}

export default EmployeeDataTable;