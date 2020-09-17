import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router';
import Dashboard from '../../components/Dashboard/Dashboard';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import Header from '../../components/Header/Header';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuth: false
        }

    }

    onClick = (event) => {
        if(event) {
            event.preventDefault();
        }
        this.setState({isAuth: !this.state.isAuth})
    }


    render() {
        return (
            <div className='app-main'>
                <Header isAuth={this.state.isAuth}/>
                { this.state.isAuth && <Switch>
                    <Route path='/dashboard' render={() => <Dashboard/> }/>
                    <Redirect to='/dashboard'/>
                </Switch> }
                { !this.state.isAuth && <Switch>
                    <Route path='/signin' component={SignIn}/>
                    <Route path='/signup' render={() => <SignUp isAuthClick={this.onClick}/> } />
                    <Redirect to='/signup'/>
                </Switch>
                }
            </div>
        );
    }

}

export default App;
