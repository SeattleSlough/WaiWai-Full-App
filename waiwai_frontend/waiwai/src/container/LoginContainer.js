import React from 'react'
import {Link} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import { Container } from '@material-ui/core';
import { FormControl, Input, FormHelperText, InputLabel } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core'

import Image from '../images/kisspng-hawaii-oahu-maui-map-island-hawaii-island-5ae1a9a6c2b2d3.3751889015247384707975.png'
import ButtonAppBar from '../component/ButtonAppBar'
import LoginCreate from '../component/LoginCreate'

const user_api = 'http://localhost:3000/api/v1/login'

class LoginContainer extends React.Component {
  constructor() {
    super();  
    this.state = {
        username: "",
        password: "",
        travelers: 1
    }
  }

  login = () => {
    this.props.setState(this.state.travelers);
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

        const styles = {
            paperContainer : {
                height: 4000,
                backgroundImage: `url(${Image})`
            }
        }
        const actions = <Button
        variant="contained"
        type="submit"
        label="Submit"
        color="default"
        value="Submit">
            Login
        </Button>
 
        return (
            <>
                <CssBaseline />
                <Container fixed style={styles.paperContainer}>
                <ButtonAppBar></ButtonAppBar>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                <div className="app_name">Maui Waiwai</div>
                <LoginCreate
                    username={this.handleChangeUsername}
                    password={this.handleChangePassword}
                    travelers={this.handleChangeTravelers}
                    submit={this.handleSubmit}
                    stateuser={this.state.username}
                    statepass={this.state.password}
                    statetravelers={this.state.travelers}
                        >
                </LoginCreate>
                    <br />
                    <br />
                    <br />
            
       
                <Link className="link" to='/signup'>
                    Create Account
                </Link>
                </Grid>
           
            </Container>
            </>
        )
    }
}

export default LoginContainer


     
            
            
            
            
            {/* <div className="title">  */}
            
            {/* <div>
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
                    {actions}
                    {/* <Button type="submit" label="Submit" value="Submit"/> */}
                {/* </form> */} 
            {/* </div> */}

             {/* </div> */}
            {/* </div> */}