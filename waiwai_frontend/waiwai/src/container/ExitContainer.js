import React from 'react'
import {Link} from 'react-router-dom'

import HotelBill from '../component/HotelBill'
import RestaurantBill from '../component/RestaurantBill'

const getHotelReservationsApi = 'http://localhost:3000/hotels/reservations'
const getRestaurantReservationsApi = 'http://localhost:3000/restaurants/reservations'


class ExitContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            hotelTotal : 0,
            restaurantTotal : 0,
        }
    }

    componentDidMount() {
        this.calculateTotalHotel()
    }

    calculateTotalHotel = () => {
        let total = 0
        fetch(getHotelReservationsApi, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'user' : `${localStorage.user_id}`
            }
        })
        .then(res => res.json())
        .then(data => data.map(obj => {
            this.setState({ hotelTotal : obj.rate * 10})
            }))
    }

    render() {
        return(

            <div>
                <h2><Link to='/portfolio'>Go To Your Itinerary</Link></h2>
                <div>
                    <div>
                        <h2> Hotel Bill</h2>
                        {this.props.hotel.map((obj,index) => (
                            <HotelBill 
                                key={index} 
                                cost={obj.rate} 
                                travelers={this.props.travelers}
                            />
                        ))}
                        <br />
                        <div>
                        <h2> Food Bill</h2>
                        {this.props.restaurants.map((obj,index) => (
                            <RestaurantBill 
                                key={index} 
                                name={obj.name} 
                                cpp={obj.cost_per_person} 
                                travelers={this.props.travelers}
                                total={this.props.setFoodTotal}
                            />
                        ))}
                        </div>
                        <div>
                            <br />
                            <h2> TOTAL COST: ${this.state.hotelTotal} </h2>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ExitContainer