import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from'./Validation/Validation';
import CharComponent from'./CharComponent/CharComponent';

class App extends Component {

    state = {
        outputLength: 0,
        outputValue: ''
    };

    textLengthHandler = (event) => {
        this.setState({outputLength: event.target.value.length});
        this.setState({outputValue: event.target.value})
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

                {this.state.outputValue.split('').map((v) => {
                    return <CharComponent value={v} />
                })}
            </div>
        );
    }
}

export default App;
