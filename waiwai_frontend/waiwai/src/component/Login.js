import React from 'react'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'

const user_api = 'http://localhost:3000/api/v1/login'

class Login extends React.Component {
  constructor() {
    super();  
    this.state = {
        username: "",
        password: ""
    }
  }

  login = () => {
      return fetch(user_api, {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json',
          },
          body: JSON.stringify ({
              username: this.state.username,
              password: this.state.password
          })
      }).then(res => res.json())
      .then(data => {
          this.handleLogin(data)
      })
  }

  handleLogin = (data) => {
      localStorage.setItem("token", data.jwt)
      localStorage.setItem("user_id", data.user_id)
      this.props.history.push('/portfolio')
  }

  handleSubmit = (ev) => {
      ev.preventDefault()
      this.login()
  }

  handleChangeUsername = (ev) => {
      this.setState({username: ev.target.value})
  }

  handleChangePassword = (ev) => {
      this.setState({password: ev.target.value})
  }


    render() {
        return (
            <body className="title"> 
            <div>
                <h1>Maui Waiwai</h1>
            <div>
                <form id="loginForm" onSubmit={(ev) => this.handleSubmit(ev)}>
                    <label>
                        Username:
                        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChangeUsername}/> 
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
                    </label>
                    <br />
                        <input type="submit" value="Submit"/>
                </form>
            </div>
                <Link to='/signup'>Create Account</Link>
            </div>
            </body>
        )
    }
}

export default Login