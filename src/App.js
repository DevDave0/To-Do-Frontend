import React from 'react';
import './App.css';
import CategoryContainer from './containers/CategoryContainer'
import TaskContainer from './containers/TaskContainer'
import TaskListContainer from './containers/TaskListContainer'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
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
