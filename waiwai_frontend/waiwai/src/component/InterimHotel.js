import React from 'react'
import {Grid} from '@material-ui/core'


import LoaderHOC from '../HOC/LoaderHOC'
import HotelReservations from '../component/HotelReservations'
import HotelItineraryCard from '../component/HotelItineraryCard'



class InterimHotel extends React.Component {
    render() {
        const styles = {
            container : {
                height: 4000,
                backgroundImage: `url(${Image})`
            }
        }
        return (
            <div>   
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                        >
                         {this.props.hotel.map((obj, index) => (
                            <HotelItineraryCard 
                                key={index}
                                name={obj.name}
                                image={obj.image}
                                id={obj.id} 
                                delete={this.props.delete}
                            />
                        ))}
                    </Grid>
            </div>
        )
    }
}

export default LoaderHOC('hotel')(InterimHotel)