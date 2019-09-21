import React from 'react'

import InterimHotel from '../component/InterimHotel'
import EmptyHotel from '../component/EmptyHotel'
import InterimRestaurant from '../component/InterimRestaurant'
import EmptyRestaurant from '../component/EmptyRestaurant'
import {Link} from 'react-router-dom'

class Portfolio extends React.Component {

    hotelIsReserved = () => {
        const length = this.props.hotel.length
        if(length !== 0) {
            return true
        }
    }

    restaurantIsReserved = () => {
        const length = this.props.restaurants.length
        if(length !== 0) {
            console.log(length)
            return true
        }
    }

    render() {
        let hotelTile;
        let restaurantTile;
        if(this.hotelIsReserved()) {
            hotelTile = <InterimHotel hotel={this.props.hotel} delete={this.props.deleteHotel}/>
        } else {
            hotelTile = <EmptyHotel/>
            }
        
        if(this.restaurantIsReserved()) {
            restaurantTile = <InterimRestaurant restaurants={this.props.restaurants} delete={this.props.deleteRestaurant} />
        } else {
            restaurantTile = <EmptyRestaurant/>
        }

        return (
            <div> 
                <h4>Total travelers: {this.props.travelers}</h4>
                <div>
                <div>
                    {hotelTile}
                    <br />
                    <div>
                        {restaurantTile}
                    </div>  
                </div>
            </div>
            <br />
            <button type="button"><Link to='/exit'>Let's Pay For This Boondoggle!!!</Link></button>
            </div>
        )
}
}

export default Portfolio