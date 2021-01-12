import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { EMPLOYEES_API_URL } from '../constants';

class DataTable extends Component {
    render() {
        const items = this.props.items;
        return <Table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
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
                        </tr>
                    ))}
            </tbody>
        </Table>;
    }

}

export default DataTable;