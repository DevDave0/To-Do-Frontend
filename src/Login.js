import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class Login extends Component {


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
        })

        // console.log(this.props.routeProps.history)
        this.props.routeProps.history.push("/task_page")
    }

    render() {
        return(
            // <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            //     <h2>Login</h2>
            //     <form onSubmit={(e)=> this.handleSubmit(e)}>
            //         <label>Username: </label>
            //         <input onChange={(e) => this.handleChange(e)} name='name' type='text'/>
            //         <label>Password: </label>
            //         <input onChange={(e) => this.handleChange(e)} name='password' type='password'/>
            //         <input type='submit'/>
            //     </form>
            //     < Link to='/sign_up'>Sign Up</Link>
            // </Grid>

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>

        )
    }

}

export default Login