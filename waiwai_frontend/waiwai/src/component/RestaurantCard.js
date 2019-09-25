import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {CardActions} from "@material-ui/core"
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
    withStyles,
    MuiThemeProvider,
    createMuiTheme
  } from "@material-ui/core/styles";

const muiBaseTheme = createMuiTheme();

const useStyles = makeStyles(theme => ({
            expand: {
              transform: 'rotate(0deg)',
              marginLeft: 'auto',
              transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
              }),
            },
            expandOpen: {
              transform: 'rotate(180deg)',
            },
          }));

const theme = {
  overrides: {
    MuiCard: {
      root: {
        "&.MuiEngagementCard--01": {
          transition: "0.3s",
          maxWidth: 300,
          minHeight: 300,
          margin: "auto",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%"
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            padding: muiBaseTheme.spacing.unit * 3
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing.unit * 3}px 0`
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold"
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8
          },
          "& .MuiButton-root": {
            // display: "inline-block",
            justifyContent: 'center'
            }
          }
        }
      }
    }
  };

function HotelCard(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

return (


<MuiThemeProvider theme={createMuiTheme(theme)}>
<div className="App">
  <Card className={"MuiEngagementCard--01"}>
    <CardMedia
      className={"MuiCardMedia-root"}
      image={
        props.image
      }
    />
    <CardContent className={"MuiCardContent-root"}>
      <Typography
        className={"MuiTypography--heading"}
        variant={"h6"}
        gutterBottom
      >
        {props.name}
      </Typography>
      <Divider className={"MuiDivider-root"} light />
      <br />
      <Typography
        className={"MuiTypography--subheading"}
        variant={"caption"}
      >
        <b>Stars:</b> {props.stars}
      </Typography>
      <br />
      <Typography
        className={"MuiTypography--subheading"}
        variant={"caption"}
      >
        <b>Cost Per Person:</b> ${props.cpp}
      </Typography>
      </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
          <Button value={props.id} size="large" color="primary" onClick={(ev) => props.reserve(ev.currentTarget.value)}> 
            Book a Table
          </Button>
      <IconButton
        className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        >
        <ExpandMoreIcon />
      </IconButton>
        </CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
    <Typography
        className={"MuiTypography--subheading"}
        variant={"caption"}
      >
        {props.description}
    </Typography>
</CardContent>
</Collapse>
  </Card>
</div>
</MuiThemeProvider>
)
}

export default HotelCard