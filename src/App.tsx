import Button from '@material-ui/core/Button';
import * as firebaseui from 'firebaseui';

import * as React from 'react';

import './App.css';

import logo from './logo.svg';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Signup</h1>
        </header>
        <p className="App-intro">
          Intro Here
        </p>
        <div>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
          <br /><br />
          <Button variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
