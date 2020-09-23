import React from 'react';
import Table from "../Table/Table";
import './Dashboard.css';
import { connect } from 'react-redux';
import { incrementAction, decrementAction, resetAction } from "../../store/actions";


class Dashboard extends React.Component {


    constructor(props) {
        super(props);
    }

    incrementClick = () => {
        this.props.increment('error');
    }

    decrementClick = () => {
        this.props.decrement('dfkodfjb');
    }

    resetClick = () => {
        this.props.reset();
    }

    render() {
        return (
            <div className='board-wrapper'>
                <div> <div className='board-navbar-left'></div></div>
                    <div className='board-main'>
                        <h2 className='board-header'>Добро пожаловать!</h2>
                        <Table/>
                    </div>
                <div onClick={this.incrementClick}>
                    +
                </div>
                <div>{this.props.counter}</div>
                <div onClick={this.decrementClick}>
                    -
                </div>
                <div onClick={this.resetClick}>
                    reset
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {counter: state.counter}
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (data) => dispatch(incrementAction(data)),
        decrement: (data) => dispatch(decrementAction(data)),
        reset: () => dispatch(resetAction())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)