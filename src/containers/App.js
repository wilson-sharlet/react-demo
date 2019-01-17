import React, { Component } from 'react';
import Persons from '../components/Persons';
import './App.css';
import withClass from '../hoc/withClass';
import {AuthContext} from '../context';
import Posts from './Posts';
import Counter from '../containers/Counter';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {id: '34',name: 'SH', age:28},
        {id: 'hfg',name: 'dsf', age: 34}
      ],
      show: false,
      counter: 0,
      authenticated: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggle = this.toggle.bind(this)
    this.handleCounter = this.handleCounter.bind(this)
    this.login = this.login.bind(this)
  }

  handleChange(id, e) {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const persons = [...this.state.persons];
    const person = persons[personIndex];
    person.name = e.target.value;
    persons.splice(personIndex, 1, person);
    this.setState({ persons: persons });
  }

  toggle() {
    this.setState({ show: true });
  }

  handleCounter() {
    this.setState((state) => { return { counter: state.counter + 1 } })
  }

  login() {
    this.setState({ authenticated: true });
  }

  render() {
    let persons = null;
    let btnClass = '';
    if(this.state.show) {
      btnClass = 'red-btn';
      persons = <Persons persons={this.state.persons} handleChange={this.handleChange} />
    }
    
    return (
      <>
        <div className='NavBar' style={{margin: "20px"}}>
          <NavLink
            to='/'
            exact
            activeClassName='active-test'
            activeStyle={{color: 'red'}}
          >Home</NavLink>
          <NavLink to={{pathname: '/counter', search: '?test=123'}}>Counter</NavLink>
        </div>
        <Switch>
          <Route path='/counter' exact component={Counter} />
          <Route path='/posts' component={Posts} />
          <Redirect from='/' to='/posts' />
        </Switch>
        {/* <h1>Hello World</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.handleCounter}>Counter</button>
        <button className={btnClass} onClick={this.toggle}>Click</button>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider> */}
      </>
    );
  }
}

export default withClass(App, 'App');
