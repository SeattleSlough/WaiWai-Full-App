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

const hotelApi = 'http://localhost:3000/hotels/filter'
// const carApi = 'http://localhost:3000/cars/filter'
// const restaurantApi = 'http://localhost:3000/restaurants/filter'
// const activityApi = 'http://localhost:3000/activities/filter'
// const carKeys = 'http://localhost:3000/carkeys'
const hotelReservationApi = 'http://localhost:3000/hotels/reservation'
// const restaurantKeys = 'http://localhost:3000/restaurantkeys'
// const activityKeys = 'http://localhost:3000/activitykeys'

class App extends React.Component {
constructor() {
  super()
  this.state = {
    hotelIndex: 0,
    carIndex: 0,
    restaurantIndex: 0,
    activityIndex: 0,
    hotels: [],
    restaurants: [],
    activites: [],
    cars: [],
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
  // this.fetchRestaurants()
}

handleIncrement = (category) => {
  switch (category) {
    case "hotel":
      this.setState({ hotelIndex : this.state.hotelIndex + 5}, this.refetch());
      break;
    case "restaurant":
      this.setState({ restaurantIndex : this.state.restaurantIndex + 5}, this.refetch());
      break;
    case "activity":
      this.setState({ activityIndex : this.state.activityIndex + 5}, this.refetch());
      break;
    case "car":
      this.setState({ carIndex : this.state.carIndex + 5}, this.refetch())
  }
}


handleDecrement = (category) => {
  switch (category) {
    case "hotel":
      if((this.state.hotelIndex - 5) > 0) {
        this.setState({ hotelIndex : this.state.hotelIndex - 5}, this.refetch())
      } else {
        this.setState({ hotelIndex : 0})
      }
      break;
      case "restaurant":
        if((this.state.restaurantIndex - 5) > 0) {
          this.setState({ restaurantIndex : this.state.restaurantIndex + 5}, this.refetch())
        } else {
          this.setState({ restaurantIndex : 0})
        }
        break;
        case "activity":
          if((this.state.activityIndex - 5) > 0) {
            this.setState({ activityIndex : this.state.activityIndex + 5}, this.refetch())
          } else {
            this.setState({ activityIndex : 0})
          }
          break;
          case "car":
            if((this.state.carIndex - 5) > 0) {
              this.setState({ carIndex : this.state.carIndex + 5}, this.refetch())
            } else {
              this.setState({ carIndex : 0})
            }
          }
        }
        
refetch = () => {
    this.fetchHotels()
    this.fetchRestaurants()
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
  .then(data => this.setState({ hotels : data}))
}

reserveHotel = (hotelId) => {
  fetch(hotelReservationApi, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'hotel' : hotelId,
      'user' : `${localStorage.getItem("user_id")}`
    }
  })
  
}

// fetchRestaurants = () => {
  //   return fetch(restaurantApi)
  //   .then(res => res.json())
  //   .then(data => this.setState({ restaurants : data}))
  // }
  // 
  // fetchRestaurantKeys = () => {
    
    // }
    
    // fetchActivities = () => {
      //   return fetch(activityApi)
      //   .then(res => res.json())
      //   .then(data => this.setState({ activities : data }))
      // }
      
      // fetchActivitiyKeys = () => {
        
        // }
        
  // fetchCars = () => {
 //   return fetch(carApi)
//   .then(res => res.json())
//   .then(data => this.setState({ cars : data}))
// }

// fetchCarKeys = () => {

// }

  render() {
    return (
   <>
   <Router>
     <Route exact path='/' render={(props) => <Login {...props}/>}/>
     <Route path='/signup' render={(props) => <Signup {...props}/>}/>
     <Route path='/portfolio' render={() => <Portfolio 
          hotel={this.state.userHotel}
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
          hotels={this.state.hotels}
          reserve={this.reserveHotel}
        />}/>
     <Route path='/restaurants' render={() => <RestaurantsContainer 
          increment={this.state.handleIncrement} 
          decrement={this.state.handleDecrement}
          restaurants={this.state.restaurants}
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
