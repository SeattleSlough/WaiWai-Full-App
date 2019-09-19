import React from 'react'

const user_api = 'http://localhost:3000/api/v1/users'

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
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
            'Accept' : 'application/json'
        },
        body: JSON.stringify ({
            username: this.state.username,
            password: this.state.password
        })
    }).then(res => res.json())
    .then(data => this.handleCreate(data))
}

handleCreate = (data) => {
   localStorage.setItem("token", data.jwt)
   localStorage.setItem("user_id", data.user_id)
   this.props.history.push('/portfolio')
}

handleChangeUsername = (ev) => {
    this.setState({ username: ev.target.value})
}

handleChangePassword = (ev) => {
    this.setState({ password: ev.target.value})
}

render() {
    return (
        <div>
            <h1>Create Your Waiwai Account</h1>
            <div>
                <form onSubmit={(ev) => this.create(ev)}>
                    <label>
                        Username:
                        <input type="text" placeholder="username" name ="username" value={this.state.username} onChange={this.handleChangeUsername}/>
                        <br />
                    </label>
                    <label>
                        Password:
                        <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
                        <br />
                    </label>
                    <br />
                        <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}
}

export default Signup