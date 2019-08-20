import React from 'react';
import Person from "./Person/Person";

const Persons = (props) => {
    console.log('[Persons.js] rendering....');
    return props.persons.map((person, index) => {
        return (
            <Person
                key={index}
                name={person.name}
                age={person.age}
                removePerson={() => props.deletePersonHandler(index)}
                changed={(event) => props.nameChangeHandler(event, person.id)}/>
        )
    });
};

export default Persons;
