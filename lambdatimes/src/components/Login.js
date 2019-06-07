import React from 'react';

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
        <form onSubmit={this.login}>
          <input placeholder='username' 
                onChange={this.usernameInput} 
                value={this.state.username}></input>
          <input placeholder='password'></input>
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;