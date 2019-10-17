import React from 'react'
import {Grid} from '@material-ui/core'

import LoaderHOC from '../HOC/LoaderHOC'
import RestaurantReservations from './RestaurantReservations'
import RestaurantItineraryCard from './RestaurantItineraryCard'

class InterimRestaurant extends React.Component {
    render() {
        return (
            <div>
                <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                        >
              
            {this.props.restaurants.map((obj, index) => (
                     <RestaurantItineraryCard 
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

export default LoaderHOC('restaurants')(InterimRestaurant)