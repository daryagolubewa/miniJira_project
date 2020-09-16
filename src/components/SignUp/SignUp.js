import React, { Component } from 'react';


export default class SignUp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.isAuthClick}> Регистрация </button>
            </div>
        )
    }

}