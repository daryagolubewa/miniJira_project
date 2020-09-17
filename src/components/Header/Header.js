import React, { Component } from 'react';
import './Header.css'


export default class Header extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        return (
                <div className='header'>
                    {!this.props.isAuth &&
                    <button className='header-btn'>Войти</button>
                    }
                    {this.props.isAuth &&
                    <button className='header-btn'>Выйти</button>
                    }
                </div>
        );
    }

}

