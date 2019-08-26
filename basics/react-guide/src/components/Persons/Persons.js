import React, {PureComponent} from 'react';
import Person from "./Person/Person";

// PureComponent implements shouldComponentUpdate with check for ALL props used in this component
// hence, will render if any of those has changed
class Persons extends PureComponent {
    // Not to be used
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // Not to be used
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('[Persons.js] componentWillReceiveProps', nextProps);
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return nextProps.persons !== this.props.persons;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    // Will be the more used!!  
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        // Use this for clean up
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering....');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={index}
                    name={person.name}
                    age={person.age}
                    removePerson={() => this.props.deletePersonHandler(index)}
                    changed={(event) => this.props.nameChangeHandler(event, person.id)}
                    isAuthenticated={this.props.isAuthenticated}/>
            )
        });
    }
}

export default Persons;
