import React, {useEffect} from 'react';
import classes from "./Cockpit.css";

const Cockpit = (props) => {

    // React hook that execute for every render cycle in functional components.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Here can be used most of the life cycles from Class components'
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is a new paragraph inside root component</p>
            <button className={btnClass}
                    onClick={props.togglePersonHandler}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;
