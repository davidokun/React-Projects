import React, {Component} from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    // Only available in classes that extends Component. Not in function components.
    // If state change, React is prompted to re-render the page
    state = {
        persons: [
            {id: '3534', name: 'David', age: 28},
            {id: '699', name: 'Andres', age: 25},
            {id: '76898', name: 'Catalina', age: 20}
        ],
        otherState: "Other Value",
        showPersons: false,
        changeCounter: 0,
        authenticated: false
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1 //this syntax is when depending on previous state
            }
        });
    };

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice();
        // Using spread form ES6
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    loginHandler = () => {
        this.setState({authenticated: true})
    };

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                deletePersonHandler={this.deletePersonHandler}
                nameChangeHandler={this.nameChangeHandler}
                isAuthenticated={this.state.authenticated}/>
        }

        return (
            <Aux>
                <header className={classes.AppHeader}>
                    <img src={logo} className={classes.AppLogo} alt="logo"/>
                    <h1 className={classes.AppTitle}>First React App</h1>
                </header>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: this.loginHandler
                }}>
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLenght={this.state.persons.length}
                        togglePersonHandler={this.togglePersonHandler}/>
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );

        /* This is the same as the JSX above. It compiles to html */
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Is this working?"));

        /* JSX Restrictions */
        /* 1. Reserved words. className instead of class. */
        /* 2. Everything must be inside a root component */
    }
}

export default withClass(App, classes.App);
