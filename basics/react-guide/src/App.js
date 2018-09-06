import React, {Component} from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    // Only available in classes that extends Component. Not in function components.
    // If state change, React is prompted to re-render the page
    state = {
        persons: [
            {id: '3534', name: 'David', age: 28},
            {id: '699', name: 'Andres', age: 25},
            {id: '76898', name: 'Catalina', age: 20}
        ],
        otherState: "Other Value",
        showPersons: false
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice();
        // Using spread form ES6
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    render() {

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <Person
                            name={person.name}
                            age={person.age}
                            removePerson={() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangeHandler(event, person.id)}/></ErrorBoundary>
                    })}

                </div>
            );

            btnClass = classes.Red;

        }

        let assignedClasses = [];

        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }


        return (
            <div className={classes.App}>
                {/*<header className={classes.AppHeader}>*/}
                    {/*<img src={logo} className={classes.AppLogo} alt="logo"/>*/}
                    {/*<h1 className={classes.AppTitle}>First React App</h1>*/}
                    {/*<p className={assignedClasses.join(' ')}>This is a new paragraph inside root component</p>*/}
                {/*</header>*/}
                {/*First way to pass parameters to a function. This could be inefficient */}
                <button className={btnClass}
                        onClick={this.togglePersonHandler}>Toggle Persons</button>

                {persons}
            </div>
        );

        /* This is the same as the JSX above. It compiles to html */
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Is this working?"));

        /* JSX Restrictions */
        /* 1. Reserved words. className instead of class. */
        /* 2. Everything must be inside a root component */
    }
}

export default App;
