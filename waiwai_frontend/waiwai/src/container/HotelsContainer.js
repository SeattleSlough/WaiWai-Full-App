import React from 'react'
import Hotel from '../component/Hotel'
import HotelCard from '../component/HotelCard'
import {Link} from 'react-router-dom'
import { Container } from '@material-ui/core';
import {Grid} from '@material-ui/core'

import LoaderHOC from '../HOC/LoaderHOC'
import Image from '../images/kisspng-hawaii-oahu-maui-map-island-hawaii-island-5ae1a9a6c2b2d3.3751889015247384707975.png'
import ButtonAppBar from '../component/ButtonAppBar'

class HotelsContainer extends React.Component {  

    render() {
        let prevButton;
        let nextButton;
        if(this.props.previous()) {
             prevButton = <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.decrement(ev.target.value)}>Previous 3</button>
        }

        if(this.props.next()) {
            nextButton = <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.increment(ev.target.value)}>Next 3</button>
        }

        const styles = {
            paperContainer : {
                height: 4000,
                backgroundImage: `url(${Image})`
            }
        }

        return(
                <Container fixed style={styles.paperContainer}>
                    <ButtonAppBar></ButtonAppBar>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2><Link to='/portfolio'>Go To Your Itinerary</Link></h2>
                    <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    >
                <br />
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
            {prevButton}
            {nextButton}
            </Grid>
            </Container>
        )
    }
}

export default LoaderHOC('hotels')(HotelsContainer)