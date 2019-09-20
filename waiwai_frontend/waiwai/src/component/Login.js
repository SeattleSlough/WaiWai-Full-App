import React from 'react'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'

const user_api = 'http://localhost:3000/api/v1/login'

class Login extends React.Component {
  constructor() {
    super();  
    this.state = {
        username: "",
        password: "",
        travelers: 1
    }
  }

  login = () => {
      this.props.setState(this.state.traveler);
      return fetch(user_api, {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json',
              'Accept' : 'application/json'
          },
          body: JSON.stringify ({
              username: this.state.username,
              password: this.state.password
          })
      }).then(res => res.json())
      .then(data => this.handleLogin(data))
  }

  handleLogin = (data) => {
      localStorage.setItem("token", data.jwt)
      localStorage.setItem("user_id", data.user_id)
      localStorage.setItem("travelers", this.state.travelers)
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

  handleChangeTravelers = (ev) => {
    this.setState({ travelers: ev.target.value })
}


    render() {
        return (
            <div className="title"> 
            <div>
                <h1 className="app_name">Maui Waiwai</h1>
            <div>
                <form id="loginForm" onSubmit={(ev) => this.handleSubmit(ev)}>
                    <label>
                        Username:
                        <input type="text" className="login-signup" placeholder="username" name="username" value={this.state.username} onChange={this.handleChangeUsername}/> 
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="text" className="login-signup" placeholder="password" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
                    </label>
                    <br />
                    <label>
                        Number of travelers (max 8):
                            <input type="number" className="login-signup" placeholder="people" name="party" value={this.state.travelers} min="1" max="8" onChange={this.handleChangeTravelers}/>
                    </label>
                    <br />
                        <input type="submit" value="Submit"/>
                </form>
            </div>
                <Link className="link" to='/signup'>
                    Create Account
                </Link>
            </div>
            </div>
        )
    }
}

export default Login