import React from 'react';
import './App.css';

import SignUp from './SignUp'
import Login from './Login'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
        
          <SignUp />
          <br></br>
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
