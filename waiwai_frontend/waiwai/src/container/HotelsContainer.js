import React from 'react'
import HotelCard from '../component/HotelCard'
import {Link} from 'react-router-dom'
import { Container } from '@material-ui/core';
import {Grid} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import LoaderHOC from '../HOC/LoaderHOC'
import Image from '../images/kisspng-hawaii-oahu-maui-map-island-hawaii-island-5ae1a9a6c2b2d3.3751889015247384707975.png'
import MainAppBar from '../component/MainAppBar'
import MyContainer from '../component/MyContainer'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
        height: 4000,
        backgroundImage: `url(${Image})`
    }
  });

class HotelsContainer extends React.Component {  
    
    render() {
        
        const {classes} = this.props;


        let prevButton;
        let nextButton;
        if(this.props.previous()) {

            prevButton = <Button
                            style={{width: 115}}
                            variant="contained"
                            type="submit"
                            label="Submit"
                            color="default"
                            value="hotel"
                            onClick={(ev) => this.props.decrement(ev.currentTarget.value)}>Previous
             </Button>
            //  <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.decrement(ev.target.value)}>Previous 3</button>
        } else {
            prevButton = <Button style={{opacity: .3, width: 115}}
                            variant="contained"
                            type="submit"
                            label="Submit"
                            color="default"
                        >Previous
                    </Button>
        }

        if(this.props.next()) {
            nextButton = <Button
                            style={{width: 100}}
                            variant="contained"
                            type="submit"
                            label="Submit"
                            color="default"
                            value="hotel"
                            onClick={(ev) => this.props.increment(ev.currentTarget.value)}>Next
            </Button>
            // <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.increment(ev.target.value)}>Next 3</button>
        } else {
            nextButton = <Button style={{opacity: .3, width: 100}}
                            variant="contained"
                            type="submit"
                            label="Submit"
                            color="default"
                        >Next
                    </Button>
        }

        const styles = {
            container : {
                height: 4000,
                backgroundImage: `url(${Image})`
            },
        }
        
        return(
            <>
                    <MainAppBar></MainAppBar>
                <Container fixed style={styles.container}>
                    <div className="hotels">Hotels</div>
                    <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    >

               {this.props.hotels.map((obj, index) => (
                    <HotelCard 
                        key={index} 
                        id={obj.id} 
                        name={obj.name} 
                        rate={obj.rate} 
                        stars={obj.stars} 
                        room={obj.room} 
                        description={obj.description} 
                        image={obj.image}
                        reserve={this.props.reserve}
                    />
               ))}
         
            <br />
           
            <div className="prevButton">
            {prevButton}
            </div>
            <div className="nextButton">
            {nextButton }
            </div>
            </Grid>
            </Container>
            </>
        )
    }
}

HotelsContainer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default LoaderHOC('hotels')(HotelsContainer)