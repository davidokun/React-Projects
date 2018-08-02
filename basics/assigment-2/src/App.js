import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from'./Validation/Validation';

class App extends Component {

    state = {
        outputLength: 0
    };

    textLengthHandler = (event) => {
        this.setState({outputLength: event.target.value.length})
    };


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Assignment 2</h1>
                </header>
                <br/>
                <label htmlFor="text">Enter a text: </label>
                <input type="text" id="text" onChange={(event) => this.textLengthHandler(event)}/>
                <p>
                    {this.state.outputLength}
                </p>

                <Validation outputLength={this.state.outputLength}/>
            </div>
        );
    }
}

export default App;
