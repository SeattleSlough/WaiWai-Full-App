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
            income : 0,
            savings : 0
        }
    }

    componentDidMount() {
        this.calculateTotalHotel()
        this.calculateTotalRestaurant()
    }

    calculateTotalHotel = () => {
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

    calculateTotalRestaurant = () => {
        let total = 0
        fetch(getRestaurantReservationsApi, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'user' : `${localStorage.user_id}`
            }
        })
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.length; i++) {
                total += data[i].cost_per_person
            }
            return total
        })
        .then(total => this.setState({ restaurantTotal : total }))
    }

    handleChangeIncome = (ev) => {
        this.setState({income : ev.target.value})
    }

    handleChangeSavings = (ev) => {
        this.setState({savings : ev.target.value})
    }

    render() {
        return(

            <div>
                <h2><Link to='/portfolio'>Go To Your Itinerary</Link></h2>
                <div>
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
                            <br />
                        </div>
                        <br />
                        <h2> TOTAL COST: ${(this.state.hotelTotal + this.state.restaurantTotal)} </h2>
                    </div>
                      <form className="bill">
                          <label >
                              Annual Income:
                                <input type="number" className="income" placeholder="income" name="income" value={this.state.income} min="1" max="8" onChange={this.handleChangeIncome}/>
                          </label>
                          <br />
                          <label> 
                              Annual Savings Rate (%):
                                <input type="number" className="savings" placeholder="savings" name="savings" value={this.state.savings} min="1" max="8" onChange={this.handleChangeSavings}/>
                          </label>
                      </form>
                </div>
                    <h4>Based on your income of ${this.state.income} and savings rate of {this.state.savings}%, it would take you {(this.state.hotelTotal + this.state.restaurantTotal)/(this.state.income * (this.state.savings/100))} years to pay for this trip.</h4>

            </div>
          
        )
    }
}

export default ExitContainer