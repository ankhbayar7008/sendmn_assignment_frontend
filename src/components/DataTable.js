import React, { Component } from 'react';
import { Table, Button, Row, Col } from 'reactstrap';
import { EMPLOYEES_API_URL } from '../constants';

class DataTable extends Component {
    render() {
        const items = this.props.items;
        return <Table>
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
                        <td colSpan="6" align="center"><b>No Users yet</b></td>
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
                                <Button outline color="warning" onClick={() => this.editItem(item.id)}>Edit</Button> {' '}
                                <Button outline color="danger" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
            </tbody>
            <tfooter>
                <tr>
                    <td colSpan="6"><Button outline color="success" onClick={() => this.createItem()}>Add Employee</Button></td>
                </tr>
            </tfooter>
        </Table>;
    }

}

export default DataTable;