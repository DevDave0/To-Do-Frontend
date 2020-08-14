import React from 'react';
import './App.css';
import CategoryContainer from './containers/CategoryContainer'
import TaskContainer from './containers/TaskContainer'
import TaskListContainer from './containers/TaskListContainer'
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

          <h1>TO DO LIST</h1>
          <TaskListContainer />
          <CategoryContainer />
          <TaskContainer />
        </header>
      </div>
    );
  }
}

export default App;
