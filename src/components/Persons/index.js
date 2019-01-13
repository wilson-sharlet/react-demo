import React, { PureComponent } from 'react';
import Person from './Person';

class Persons extends PureComponent {
    constructor() {
        super();
        this.personRef = React.createRef();
    }

    componentDidMount = () => {
        this.personRef.current.focus();
    }

    render() {
        return (
            this.props.persons.map((person, index) => {
                return <Person
                name={person.name}
                id={person.id}
                handleChange={this.props.handleChange}
                position={index}
                ref={this.personRef}
                >{person.age}</Person>
            })
        )
    }
}

export default Persons;