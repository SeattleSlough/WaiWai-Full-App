import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './component/Login'
import Signup from './component/Signup'
import Portfolio from './container/Portfolio'
import CarsContainer from './container/CarsContainer'
import HotelsContainer from './container/HotelsContainer'
import RestaurantsContainer from './container/RestaurantsContainer'
import ActivitiesContainer from './container/ActivitiesContainer'
import ExitContainer from '.container/ExitContainer'

const hotelApi = 'http://localhost:3000/hotels/filter'
const restaurantApi = 'http://localhost:3000/restaurants/filter'
const makeHotelReservationApi = 'http://localhost:3000/hotels/reservation'
const getHotelReservationsApi = 'http://localhost:3000/hotels/reservations'
const deleteHotelReservationsApi = 'http://localhost:3000/hotels/delete'

class App extends React.Component {
constructor() {
  super()
  this.state = {
    travelers: 1,
    hotelIndex: 0,
    carIndex: 0,
    restaurantIndex: 0,
    activityIndex: 0,
    hotels: [],
    restaurants: [],
    activites: [],
    cars: [],
    userHotel: [],
    userCar: [],
    userRestaurants: [],
    userActivities: []
  }
}

componentDidMount() {
  this.fetchHotels()
  this.fetchHotelReservations()
  this.fetchRestaurants()
}

handleIncrement = (category) => {
  switch (category) {
    case "hotel":
      this.setState({ hotelIndex : this.state.hotelIndex + 3});
      break;
    case "restaurant":
      this.setState({ restaurantIndex : this.state.restaurantIndex + 3}, this.refetch());
      break;
    case "activity":
      this.setState({ activityIndex : this.state.activityIndex + 3}, this.refetch());
      break;
    case "car":
      this.setState({ carIndex : this.state.carIndex + 3}, this.refetch())
  }
}


handleDecrement = (category) => {
  switch (category) {
    case "hotel":
      if((this.state.hotelIndex - 3) > 0) {
        this.setState({ hotelIndex : this.state.hotelIndex - 3}, this.refetch())
      } else {
        this.setState({ hotelIndex : 0})
      }
      break;
      case "restaurant":
        if((this.state.restaurantIndex - 3) > 0) {
          this.setState({ restaurantIndex : this.state.restaurantIndex - 3}, this.refetch())
        } else {
          this.setState({ restaurantIndex : 0})
        }
        break;
        case "activity":
          if((this.state.activityIndex - 3) > 0) {
            this.setState({ activityIndex : this.state.activityIndex - 3}, this.refetch())
          } else {
            this.setState({ activityIndex : 0})
          }
          break;
          case "car":
            if((this.state.carIndex - 3) > 0) {
              this.setState({ carIndex : this.state.carIndex - 3}, this.refetch())
            } else {
              this.setState({ carIndex : 0})
            }
          }
        }
        
refetch = () => {
    this.fetchHotels()
    // this.fetchRestaurants()
}

fetchHotels = () => {
  return fetch(hotelApi, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'index' : this.state.hotelIndex
    }
  })
  .then(res => res.json())
  .then(data => {
    this.setState({ hotels : data})})
}

reserveHotel = (hotelId) => {
  fetch(makeHotelReservationApi, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'hotel' : hotelId,
      'user' : `${localStorage.getItem("user_id")}`
    }
  })
}

fetchHotelReservations = () => {
  fetch(getHotelReservationsApi, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'user' : `${localStorage.getItem("user_id")}`
    }
  })
  .then(res => res.json())
  .then(data => this.setState({userHotel : data}, console.log(this.state.userHotel)))
}

deleteHotelReservations = (hotelId) => {
  fetch(deleteHotelReservationsApi, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'hotel' : hotelId,
      'user' : `${localStorage.getItem("user_id")}`
    }
  })
  .then(this.setState({ userHotel : []}))
}

previousHotels = () => {
  if(this.state.hotelIndex > 3) {
    return true
  }
}

nextHotels = () => {
  if(this.state.hotelIndex < this.state.hotels.length) {
    return true
  }
}

fetchRestaurants = () => {
    return fetch(restaurantApi, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        'index' : this.state.restaurantIndex
      }
    })
    .then(res => console.log(res))
    // .then(data => this.setState({ restaurants : data }))
  }
    
  handleChangeTravelers = (ev) => {
    this.setState({ travelers: ev.target.value })
}

  render() {
    return (
   <>
   <Router>
     <Route exact path='/' render={(props) => <Login {...props}/>}/>
     <Route path='/signup' render={(props) => <Signup {...props}/>}/>
     <Route path='/exit' render={() => <ExitContainer hotel={this.state.userHotel} restaurants={this.state.userRestaurants} travelers={this.state.travelers}/>}/>
     <Route path='/portfolio' render={() => <Portfolio 
          travelers={this.handleChangeTravelers}
          hotel={this.state.userHotel}
          car={this.state.userCar}
          restaurants={this.state.userRestaurants}
          activities={this.state.userActivities}
          deleteHotel={this.deleteHotelReservations}
          deleteRestaurant={this.deleteRestaurantReservations}
        />}/>
     <Route path='/cars' render={() => <CarsContainer 
          increment={this.handleIncrement} 
          decrement={this.handleDecrement}
        />}/>
     <Route path='/hotels' render={() => <HotelsContainer 
          increment={this.handleIncrement} 
          decrement={this.handleDecrement}
          hotels={this.state.hotels}
          reserve={this.reserveHotel}
          previous={this.previousHotels}
        />}/>
     <Route path='/restaurants' render={() => <RestaurantsContainer 
          increment={this.handleIncrement} 
          decrement={this.handleDecrement}
          restaurants={this.state.restaurants}
          reserve={this.reserveRestaurant}
          previous={this.previousRestaurants}
        />}/>
     <Route path='/activities' render={() => <ActivitiesContainer 
          increment={this.handleIncrement} 
          decrement={this.handleDecrement}
        />}/>
   </Router>

   </>
  );
}
}

export default App;
