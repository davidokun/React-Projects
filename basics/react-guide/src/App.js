import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    // Only available in classes that extends Component. Not in function components.
    // If state change, React is prompted to re-render the page
    state = {
        persons: [
            {name: 'David', age: 28},
            {name: 'Andres', age: 25},
            {name: 'Catalina', age: 20}
        ],
        otherState: "Other Value"
    };

    switchNameHandler = (newName) => {
        // Update the state
        this.setState({
            persons: [
                {name: newName, age: 21},
                {name: 'Andres', age: 25},
                {name: 'Catalina', age: 20}
            ]
        });
    };

    typedChangeNameHandler = (event) => {
        this.setState({
            persons: [
                {name: 'David', age: 21},
                {name: event.target.value, age: 25},
                {name: 'Catalina', age: 20}
            ]
        });
    };

    render() {

        const style = {
            backgroundColor: 'grey',
            font: 'inherit',
            border: '1px solid red',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">First React App</h1>
                    <p>This is a new paragraph inside root component</p>
                </header>
                {/*First way to pass parameters to a function. This could be inefficient */}
                <button style={style}
                        onClick={() => this.switchNameHandler('Angie!')}>Switch Name</button>
                <Person name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        // Second way to bind parameters. This is the preferred way
                        changeNameClick={this.switchNameHandler.bind(this, 'Alexa!')}
                        typedName={this.typedChangeNameHandler}> My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name}
                        age={this.state.persons[2].age} />
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
