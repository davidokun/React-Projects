import React, {Component} from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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

        if (this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        deletePersonHandler={this.deletePersonHandler}
                        nameChangeHandler={this.nameChangeHandler} />
        }

        return (
            <div className={classes.App}>
                <header className={classes.AppHeader}>
                    <img src={logo} className={classes.AppLogo} alt="logo"/>
                    <h1 className={classes.AppTitle}>First React App</h1>
                </header>

                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    togglePersonHandler={this.togglePersonHandler}/>
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
