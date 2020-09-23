import React, { Component } from 'react';
import './Header.css'


export default class Header extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        return (
                <div className='header'>
                    <div className='header-info'>
                        <p><i className="fas fa-align-justify"></i></p>    <p> Mini Jira </p>
                    </div>
                    {!this.props.isAuth &&
                    <button className='header-btn'>Войти</button>
                    }
                    {this.props.isAuth &&
                    <div className='header-elems'>
                        {/*<div className='header-boards'>Доски</div>*/}
                        <button className='header-btn'>Выйти</button>
                    </div>
                    }
                </div>
        );
    }

}

