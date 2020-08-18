import React from 'react';
import './App.css';

import SignUp from './SignUp'
import Login from './Login'
import TaskPage from './containers/TaskPage'
import Board from './components/Board'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {

  state = {
    loggedIn: false,
  }

  componentDidMount() {
    if(localStorage.token) {
      this.setState({
        loggedIn: true
      })
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  handleSubmit = (e) => {
      e.preventDefault()

      fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
              'Content-Type' : "application/json"
          },
          body: JSON.stringify({
              name: this.state.name,
              password: this.state.password
          })
      })
      .then( resp => resp.json())
      .then(data => {
          localStorage.token = data.token
          localStorage.userName = data.user.name 
          localStorage.userId = data.user.id
          this.setState({loggedIn: true})
      })

  }

  signUp = (e) => {
    e.preventDefault()
    
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name: this.state.name,
            password: this.state.password
        })
    })
    .then(resp => resp.json())
    .then(data => {
        localStorage.token = data.token
        localStorage.userName = data.user.name 
        localStorage.userId = data.user.id
        this.setState({loggedIn: true})
    })

}

  logOut = (e) => {
    e.preventDefault()
    this.setState({
      name: "",
      password: "",
      loggedIn: false,
    },
    localStorage.clear(),
    alert("You have logged out!")
    )
  }



  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          
          <Route path="/sign_up" render={(routeProps) => (this.state.loggedIn) ? <Redirect to='/task_page' /> :
          <SignUp routeProps={routeProps} handleChange={this.handleChange} signUp={this.signUp} />} />
          
          <Route path="/login" render={(routeProps) => (this.state.loggedIn) ? <Redirect to='/task_page' /> :
          <Login routeProps={routeProps} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />

          <Route path="/task_page" render={(routeProps) => <TaskPage logOut={this.logOut} /> }/>
          {/* component={ TaskPage }  */}
          <Route path="/board" component={ Board } />

            <br></br>

          </header>


        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
