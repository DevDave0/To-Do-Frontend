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
          
          <Route path="/sign_up" render={(routeProps) => <SignUp routeProps={routeProps} />} />
          
          <Route path="/login" render={(routeProps) => <Login routeProps={routeProps} />} />
          <Route path="/task_page" component={ TaskPage } />
            <br></br>

          </header>


        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
