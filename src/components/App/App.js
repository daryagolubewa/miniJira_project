import React from 'react';
import '../../App.css';
import UsersList from "../UsersList/UsersList"
import Table from "../Table/Table";

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
            ],
            tableData: [
                {
                    icon: '',
                    title: 'Story',
                    name: 'Alan',
                    key: 'rrrrr',
                    category: 'Transport',
                },
                {
                    icon: '',
                    title: 'Ginger',
                    name: 'Alister',
                    key: 'ususu',
                    category: 'Culture',
                },
                {
                    icon: '',
                    title: 'Vampire',
                    name: 'Jeff',
                    key: 'jrgikers',
                    category: 'Culture',
                },
                {
                    icon: '',
                    title: 'Wonderland',
                    name: 'Alice',
                    key: 'twidle',
                    category: 'Drugs',
                },
                {
                    icon: '',
                    title: 'Gild',
                    name: 'Graham',
                    key: 'rlkd',
                    category: 'Diagnosis',
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
                <Table table={this.state.tableData}/>
            </div>
        );
    }

}

export default App;
