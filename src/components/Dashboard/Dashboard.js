import React from 'react';
import Table from "../Table/Table";
import './Dashboard.css'

export default class Dashboard extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='board-wrapper'>
                <div> <div className='board-navbar-left'></div></div>
                    <div>
                        <h2 className='board-header'>Добро пожаловать!</h2>
                        <Table/>
                    </div>
            </div>
        );
    }

}
