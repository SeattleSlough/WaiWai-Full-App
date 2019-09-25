import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link as RouterLink} from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
const Itinerary =  React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/portfolio" {...props}/>))

export default function MainAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}} >
          <div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" aria-controls="simple-menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Itinerary</MenuItem>
        <MenuItem onClick={handleClose}>Hotels</MenuItem>
        <MenuItem onClick={handleClose}>Restaurants</MenuItem>
      </Menu>
    </div>
          <Typography variant="h6" className={classes.title}>
            Maui Waiwai
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}