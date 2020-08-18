import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'


class Login extends Component {

    render() {
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='check circle' />
                        Log-in to your account
                    </Header>
                <form size='large' onSubmit={(e)=> this.props.handleSubmit(e)}>
                    <Segment stacked>

                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={(e) => this.props.handleChange(e)} name='name' type='text' />

                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' onChange={(e) => this.props.handleChange(e)} name='password' type='password'  />
                        <br></br>
                        <Form.Input type='submit'/>
                    </Segment>

                </form>
                <Message>
                    New to us? < Link to='/sign_up'>Sign Up</Link>
                </Message>
                
                </Grid.Column>
            </Grid>


        )
    }

}

export default Login