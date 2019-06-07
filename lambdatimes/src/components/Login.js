import React from 'react';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const LoginForm = styled.form`
  padding: 2rem;
`

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: ''
    }
  }

  usernameInput = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  login = () => {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem('username', this.state.username);
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.login}>
          <Input placeholder='username' 
                onChange={this.usernameInput} 
                value={this.state.username}></Input>
          <Input placeholder='password'></Input>
          <Button block>Login</Button>
        </LoginForm>
      </div>
    )
  }
}

export default Login;