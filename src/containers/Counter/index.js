import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, add, saveResult } from '../../store/actions/actions';
import * as ActionCreators from '../../store/actions/actions';
import Test from './Test'

class Counter extends Component {
    render() {
        return (<div>
            <h1>Current Counter {this.props.ctr}</h1>
            <button onClick={this.props.handleIncrement}>Increment Counter</button>
            <button onClick={() => this.props.handleAdd(4)}>Add Counter</button>
            <button onClick={() => this.props.saveResult(this.props.ctr)}>Store Result</button>
            <h3>Result: {this.props.res}</h3>
            <Test {...this.props.test} />
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
        handleIncrement: () => dispatch(increment()),
        handleAdd: (payload) => dispatch(add(payload)),
        saveResult: (result) => dispatch(saveResult(result)),
        test: bindActionCreators(ActionCreators, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);