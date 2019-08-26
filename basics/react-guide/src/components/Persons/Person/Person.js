import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
    }

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
                <input key="3"
                       ref={(inputEl) => {this.inputElement = inputEl}} //only for class base component
                       type="text"
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </Fragment>
        );
    }
}

// PropTypes to enforce types on the props passed to a component.
Person.propTypes = {
    removePerson: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person)
