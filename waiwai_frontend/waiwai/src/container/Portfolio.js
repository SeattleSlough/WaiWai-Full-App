import React from 'react'
import InterimHotel from '../component/InterimHotel'
import EmptyHotel from '../component/EmptyHotel'
import RestaurantReservations from '../component/RestaurantReservations'
import EmptyRestaurant from '../component/EmptyRestaurant'

class Portfolio extends React.Component {
   componentWillMount() {
       this.props.reservations()
   }

    hotelIsReserved = () => {
        const length = this.props.hotel.length
        if(length !== 0) {
            return true
        }
    }

    restaurantIsReserved = () => {
        const length = this.props.restaurants.length
        if(length != 0) {
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
            restaurantTile = <RestaurantReservations restaurants={this.props.restaurants} delete={this.props.deleteRestaurant} />
        } else {
            restaurantTile = <EmptyRestaurant/>
        }

        return (
            <div> 
                <form>
                    <label>
                        Number of travelers (max 8):
                            <input type="number" className="login-signup" placeholder="people" name="party" value={this.state.travelers} min="1" max="8" onChange={this.props.travelers}/>
                    </label>
                    <br />
                            <input type="submit" value="Submit"/>
                </form>
                <div>
                    {hotelTile}
                    <div>
                        {restaurantTile}
                    </div>  
                </div>
            </div>
        )
}
}

export default Portfolio