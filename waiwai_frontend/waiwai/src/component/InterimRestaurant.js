import React from 'react'

import LoaderHOC from '../HOC/LoaderHOC'
import RestaurantReservations from './RestaurantReservations'

class InterimRestaurant extends React.Component {
    render() {
        return (
            <div>
            {this.props.restaurant.map((obj, index) => (
                     <RestaurantReservations 
                        key={index}
                        name={obj.name}
                        image={obj.image}
                        id={obj.id} 
                        delete={this.props.delete}
                    />
                ))}
            </div>
        )
    }
}

export default LoaderHOC('hotel')(InterimRestaurant)