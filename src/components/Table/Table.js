import React from 'react';
import './Table.css'

export default class Table extends React.Component {


    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className='table-wrapper'>
                <table >
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </table>
            </div>
        );
    }

}

