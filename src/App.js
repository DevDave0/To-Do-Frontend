import React from 'react';
import './App.css';

import SignUp from './SignUp'
import Login from './Login'
import TaskPage from './containers/TaskPage'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          
            <SignUp />
            <br></br>
            <Login />
          </header>
          
          {/* <Route path="/sign_up" component={ SignUp } /> */}
          <Route path="/task_page" component={ TaskPage } />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
