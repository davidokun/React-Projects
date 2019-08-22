import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.removePerson}
                   key="k1">
                    I'm {this.props.name} and I am {this.props.age} years old
                </p>
                <p key="k2">{this.props.children}</p>
                <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

export default Person;
