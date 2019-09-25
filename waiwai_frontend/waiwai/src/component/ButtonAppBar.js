import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link as RouterLink} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '0 20px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Login = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/" {...props}/>))
const Signup =  React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/signup" {...props}/>))

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Maui Waiwai
          </Typography>
          <Button color="inherit" component={Login}>Login</Button>
          <Button color="inherit" component={Signup}>Create Account</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}