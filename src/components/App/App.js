import React from 'react';
import './App.css'

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



    render() {
        return (
            <div className='main-header'>
                <div className='main-navbar-left'>

                </div>
                <div className='main-main-part'>

                </div>
            </div>
        );
    }

}

export default App;
