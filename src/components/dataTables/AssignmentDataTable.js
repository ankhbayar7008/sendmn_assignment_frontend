import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
//import { EMPLOYEES_API_URL } from '../../constants';

class AssignmentDataTable extends Component {
    render() {
        const items = this.props.items;
        return <div><Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Employee Name</th>
                    <th>Review Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {!items || items.length <= 0 ?
                    <tr>
                        <td colSpan="6" align="center"><b>No assignment to list</b></td>
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
                                <Button outline color="success" onClick={() => this.editItem(item.id)}>View</Button> {' '}
                                <Button outline color="warning" onClick={() => this.editItem(item.id)}>Edit</Button> {' '}
                                <Button outline color="danger" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
            <hr />
            <Button outline color="success" onClick={() => this.createItem()}>Add Assignment</Button>
            </div>;
    }

}

export default AssignmentDataTable;