import React from 'react'
import {Link} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from '@material-ui/core';
import {Grid} from '@material-ui/core'

import LoginCreate from '../component/LoginCreate'
import ButtonAppBar from '../component/ButtonAppBar'
import Image from '../images/kisspng-hawaii-oahu-maui-map-island-hawaii-island-5ae1a9a6c2b2d3.3751889015247384707975.png'

const user_api = 'http://localhost:3000/api/v1/users'

class SignupContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            travelers: 1
        }
    }

handleSubmit = (ev) => {
    ev.preventDefault()
    this.create()
}

create = () => {
    return fetch(user_api, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify ({
            username: this.state.username,
            password: this.state.password,
        })
    }).then(res => res.json())
    .then(data => this.handleCreate(data))
    .then(this.props.setState(this.state.traveler))
}

handleCreate = (data) => {
   localStorage.setItem("token", data.jwt)
   localStorage.setItem("user_id", data.user_id)
   localStorage.setItem("travelers", this.state.travelers)
   this.props.history.push('/portfolio')
}

handleChangeUsername = (ev) => {
    this.setState({ username: ev.target.value})
}

handleChangePassword = (ev) => {
    this.setState({ password: ev.target.value})
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
                <div>
                    <div className="app_name"> Maui Waiwai </div>
                    <div className="create"> Create Your Waiwai Account</div>
                </div>
                <br />
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
        
   
            <Link className="link" to='/'>
                Login
            </Link>
            </Grid>
       
        </Container>
        </>
    )
}
}

export default SignupContainer 