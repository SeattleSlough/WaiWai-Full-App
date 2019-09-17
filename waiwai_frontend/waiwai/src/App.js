import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

import Login from './component/Login'
import Signup from './component/Signup'

const hotelApi = 'http://localhost:3000/hotels'
const carApi = 'http://localhost:3000/cars'
const restaurantApi = 'http://localhost:3000/restaurants'
const activityApi = 'http://localhost:3000/activities'
const flightApi = 'http://localhost:3000/flights'
const flightKeys = 'http://localhost:3000/flightkeys'
const carKeys = 'http://localhost:3000/carkeys'
const hotelKeys = 'http://localhost:3000/hotelkeys'
const restaurantKeys = 'http://localhost:3000/restaurantkeys'
const activityKeys = 'http://localhost:3000/activitykeys'

//this is a comment

class App extends React.Component {
constructor() {
  super()
  this.state = {
    hotelIndex: 0,
    carIndex: 0,
    restaurantIndex: 0,
    activityIndex: 0,
    prevHotel5: [],
    thisHotel5: [],
    nextHotel5: [],
    prevRestaurant5: [],
    thisRestaurant5: [],
    nextRestaurant5: [],
    prevActivity5: [],
    thisActivity5: [],
    nextActivity5: [],
    allCarKeys: [],
    allHotelKeys: [],
    allRestaurantKeys: [],
    allActivityKeys: [],
    userHotel: {},
    userCar: {},
    userRestaurants: [],
    userActivities: []
  }
}

componentDidMount() {
  this.fetchHotels()
  this.fetchRestaurants()
  this.fetchHotelKeys()
  this.fetchRestaurantKeys()
}

handleIncrement = (category) => {
  switch (category) {
    case "hotel":
      this.setState({ hotelIndex : this.state.hotelIndex + 5});
      break;
    case "restaurant":
      this.setState({ restaurantIndex : this.state.restaurantIndex + 5});
      break;
    case "activity":
      this.setState({ activityIndex : this.state.activityIndex + 5});
      break;
    case "car":
      this.setState({ carIndex : this.state.carIndex + 5})
  }
}

handleDecrement = (category) => {
  switch (category) {
    case "hotel":
      if((this.state.hotelIndex - 5) > 0) {
        this.setState({ hotelIndex : this.state.hotelIndex - 5})
      } else {
        this.setState({ hotelIndex : 0})
      }
      break;
    case "restaurant":
      if((this.state.restaurantIndex - 5) > 0) {
      this.setState({ restaurantIndex : this.state.restaurantIndex + 5})
      } else {
        this.setState({ restaurantIndex : 0})
      }
      break;
    case "activity":
      if((this.state.activityIndex - 5) > 0) {
      this.setState({ activityIndex : this.state.activityIndex + 5})
      } else {
        this.setState({ activityIndex : 0})
      }
      break;
    case "car":
      if((this.state.carIndex - 5) > 0) {
        this.setState({ carIndex : this.state.carIndex + 5})
      } else {
        this.setState({ carIndex : 0})
      }
  }
}

fetchCars = () => {
  return fetch(carApi)
  .then(res => res.json())
  .then(data => this.setState({ allCars : data}))
}

fetchHotels = () => {
  return fetch(hotelApi)
  .then(res = res.json())
  .then(data => this.setState({ allHotels : data}))
}

fetchRestaurants = () => {
  return fetch(restaurantApi)
  .then(res => res.json())
  .then(data => this.setState({ allRestaurants : data}))
}

fetchActivities = () => {
  return fetch(activityApi)
  .then(res => res.json())
  .then(data => this.setState({ allActivities : data }))
}

fetchCarKeys = () => {

}

fetchHotelKeys = () => {

}

fetchFlightKeys = () => {

}

fetchRestaurantKeys = () => {

}

fetchActivitiyKeys = () => {

}

  render() {
    return (
   <>
   <Router>
     <Route exact path='/' render={(props) => <Login {...props}/>}/>
     <Route path='/signup' render={(props) => <Signup {...props}/>}/>
     <Route path='/portfolio' render={() => <Portfolio 
          hotel={this.state.userHotel}
          flight={this.state.userFlight}
          car={this.state.userCar}
          restaurants={this.state.userRestaurants}
          activities={this.state.userActivities}
          increment={this.state.handleIncrement} 
          decrement={this.state.handleDecrement}
        />}/>
     <Route path='/cars' render={() => <CarsContainer 
          increment={this.state.handleIncrement} 
          decrement={this.state.handleDecrement}
        />}/>
     <Route path='/hotels' render={() => <HotelsContainer 
          increment={this.state.handleIncrement} 
          decrement={this.state.handleDecrement}
        />}/>
     <Route path='/restaurants' render={() => <RestaurantsContainer 
          increment={this.state.handleIncrement} 
          decrement={this.state.handleDecrement}
        />}/>
     <Route path='/activities' render={() => <ActivitiesContainer 
          increment={this.state.handleIncrement} 
          decrement={this.state.handleDecrement}
        />}/>
   </Router>

   </>
  );
}
}

export default App;
