import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

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

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice();
        // Using spread form ES6
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    render() {

        const style = {
            backgroundColor: 'grey',
            font: 'inherit',
            border: '1px solid red',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            removePerson={() => this.deletePersonHandler(index)} />
                    })}

                </div>
            );
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">First React App</h1>
                    <p>This is a new paragraph inside root component</p>
                </header>
                {/*First way to pass parameters to a function. This could be inefficient */}
                <button style={style}
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
