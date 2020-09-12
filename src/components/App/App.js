import React from 'react';
import '../../App.css';
import UsersList from "../UsersList/UsersList"

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            admin: {
                name: 'Petr',
                age: '25',
                city: 'Magadan',
            },
            users: [
                 {
                    name: 'Vasya',
                    age: '21',
                    city: 'Moscow',
                },
                 {
                    name: 'Petya',
                    age: '24',
                    city: 'Ryazan',
                },
                {
                    name: 'Sam',
                    age: '34',
                    city: 'New-York',
                }
            ]
        };
        this.onClickMinus = this.onClickMinus.bind(this);
    }

    onClickMinus() {
        const {counter} = this.state;
        this.setState({counter: counter - 1});
    }

    onClickPlus() {
        const {counter} = this.state;
        this.setState({counter: counter + 1});
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.onClickMinus() } > - </button>
                <div> {this.state.counter} </div>
                <button onClick={ () => this.onClickPlus() } > + </button>

                <UsersList users={this.state.users} />
            </div>
        );
    }

}

export default App;
