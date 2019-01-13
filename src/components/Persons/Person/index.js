import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../context';

class Person extends Component {
    static contextType = AuthContext;
    constructor() {
        super();
        this.inputElement = React.createRef()
        this.focus = this.focus.bind(this);
    }
    focus() {
        this.inputElement.current.focus();
    }
    render() {
        return (
            <>
                {/* <AuthContext.Consumer>
                    {auth => auth ? <p>Authenticated</p> : null}
                </AuthContext.Consumer> */}
                { this.context ? <p>Authenticated</p> : null}
                <p>Hi, My name is {this.props.name}</p>
                <input ref={this.inputElement} onChange={(e) => this.props.handleChange(this.props.id, e)} value={this.props.name} />
                {this.props.children}
            </>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    handleChange: PropTypes.func,
}

export default withClass(Person, classes.Person);