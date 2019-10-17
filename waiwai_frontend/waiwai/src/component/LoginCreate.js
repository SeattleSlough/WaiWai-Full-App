import React from 'react'
import { FormControl, Input, FormHelperText, InputLabel } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default function LoginCreate(props) {

    const actions = <Button
    variant="contained"
    type="submit"
    label="Submit"
    color="default"
    value="Submit">
        Login
    </Button>
    
    return (
        <Paper square={false} elevation={1}>
            <form onSubmit={(ev) => props.submit(ev)}>
                    <FormControl variant="outlined" required={true} fullWidth={true}>
                        <InputLabel htmlFor="my-input" > Username</InputLabel>
                        <Input value={props.user} id="my-input" aria-describedby="my-helper-text" onChange={props.username} />
                        <FormHelperText id="my-helper-text">Input your username</FormHelperText>
                    </FormControl>
                    <br />
                    <br />
                    <FormControl variant="outlined" required={true} fullWidth={true}>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input value={props.statepass} id="my-input" aria-describedby="my-helper-text" onChange={props.password}/>
                        <FormHelperText id="my-helper-text">Input your password</FormHelperText>
                    </FormControl>
                    <br />
                    <br />
                    <FormControl variant="outlined" required={true} fullWidth={true}>
                        <InputLabel htmlFor="my-input">Number of travelers</InputLabel>
                        <Input value={props.statetravelers} id="my-input" aria-describedby="my-helper-text" inputProps={{min: "1", max: "8"}} onChange={props.travelers}/>
                        <FormHelperText id="my-helper-text">max: 8</FormHelperText>
                    </FormControl>
                    <br />
                    <br />
                    {actions}
            </form>
        </Paper>
    )
}