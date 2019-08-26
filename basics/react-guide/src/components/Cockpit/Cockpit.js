import React, {useEffect, useRef} from 'react';

import classes from "./Cockpit.css";

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    // React hook that execute for every render cycle in functional components.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Here can be used most of the life cycles from Class components'

        //simulates and http request.
        // const timer = setTimeout(() => {
        //     alert('Performing an http request')
        // }, 1000);
        toggleBtnRef.current.click();

        return () => {
            // It will run BEFORE the component is destroy.
            // Used as componentWillUnmount.
            console.log('[Cockpit.js] clean up work in cockpit useEffect');
            // clearTimeout(timer); // example of some clean up
        };

    // }, [props.persons]); // will execute ONLY when the 'persons' is updated
    }, []); // will execute ONLY when the 'persons' is updated
    // pass an '[]' to be execute only once, when it was created (componentDidMount).

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLenght <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLenght <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is a new paragraph inside root component</p>
            <button className={btnClass}
                    ref={toggleBtnRef}
                    onClick={props.togglePersonHandler}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
        </div>
    );
};

export default React.memo(cockpit); // Cache this component
