import React, { Component } from 'react';
import './SignUp.css'


export default class SignUp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='form-wrapper'>
                    <div className='form'>
                        <form action="">
                            <h3>Зарегистрироваться</h3>
                            <label htmlFor="fname">Введите e-mail:</label><br></br>
                            <input type="text" id="fname" value="E-mail" className='form-input-email'/><br></br>
                            <label htmlFor="fname">Введите пароль:</label><br></br>
                            <input type="text" id="fname" value="Пароль" className='form-input-pass'/><br></br>
                            <button className='button'>Отправить</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


