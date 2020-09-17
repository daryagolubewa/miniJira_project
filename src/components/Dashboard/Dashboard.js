import React from 'react';
import './.css'
import Table from "../Table/Table";

export default class Dashboard extends React.Component {


    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className=''>
                <h2>Добро пожаловать!</h2>
                <Table/>
            </div>
        );
    }

}
