import React from 'react'

const user_api = 'http://localhost:3000/api/v1/users'

class Signup extends React.Component {
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
    return (
        // <div className="title">
           

            <CssBaseline />
                <Container fixed style={styles.paperContainer}>
                <ButtonAppBar></ButtonAppBar>
                <h1 className="app_name"> Maui Waiai</h1>
                <h3 id="create">Create Your Waiwai Account</h3>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                <Paper square={false} elevation={1}>
            <form onSubmit={(ev) => props.submit(ev)}>
                    <FormControl variant="outlined" required={true} fullWidth={true}>
                        <InputLabel htmlFor="my-input" > Username</InputLabel>
                        <Input value={this.state.username} id="my-input" aria-describedby="my-helper-text" onChange={this.handleChangeUsername} />
                        <FormHelperText id="my-helper-text">Input your username</FormHelperText>
                    </FormControl>
                    <br />
                    <br />
                    <FormControl variant="outlined" required={true} fullWidth={true}>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input value={this.state.password} id="my-input" aria-describedby="my-helper-text" onChange={this.handleChangePassword}/>
                        <FormHelperText id="my-helper-text">Input your password</FormHelperText>
                    </FormControl>
                    <br />
                    <br />
                    <FormControl variant="outlined" required={true} fullWidth={true}>
                        <InputLabel htmlFor="my-input">Number of travelers</InputLabel>
                        <Input value={this.state.travelers} id="my-input" aria-describedby="my-helper-text" inputProps={{min: "1", max: "8"}} onChange={this.handleChangeTravelers}/>
                        <FormHelperText id="my-helper-text">max: 8</FormHelperText>
                    </FormControl>
                    <br />
                    <br />
                    {actions}
            </form>
        </Paper>
    
        </Grid>
           
        </Container>
           




















{/* 

            <div>
                <form onSubmit={(ev) => this.handleSubmit(ev)}>
                    <label>
                        Username:
                        <input type="text" className="login-signup" placeholder="username" name ="username" value={this.state.username} onChange={this.handleChangeUsername}/>
                        <br />
                    </label>
                    <label>
                        Password:
                        <input type="text" className="login-signup" placeholder="password" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
                        <br />
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
        </div>
    ) */}
}
}

export default Signup