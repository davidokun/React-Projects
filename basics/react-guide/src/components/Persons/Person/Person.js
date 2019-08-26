import React, {Component, Fragment} from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');

        // Fragment does the same as the Aux component. Implementation is the same
        return (
            <Fragment>
                <p onClick={this.props.removePerson}
                   key="k1">
                    I'm {this.props.name} and I am {this.props.age} years old
                </p>
                <p key="k2">{this.props.children}</p>
                <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
            </Fragment>
        );
    }
}

export default withClass(Person, classes.Person)
