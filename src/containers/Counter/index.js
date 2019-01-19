import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Counter extends Component {
    render() {
        return (<div>
            <h1>Current Counter {this.props.ctr}</h1>
            <button onClick={this.props.handleIncrement}>Increment Counter</button>
            <button onClick={() => this.props.handleAdd(4)}>Add Counter</button>
            <button onClick={() => this.props.storeResult(this.props.ctr)}>Store Result</button>
            <h3>Result: {this.props.res}</h3>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.get('coun').get('counter'),
        res: state.get('res').get('result'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch({ type: actions.INCREMENT }),
        handleAdd: (payload) => dispatch({ type: actions.ADD, payload }),
        storeResult: (result) => dispatch({ type: actions.STORE_RESULT, result }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);