import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginContainer from "./container/LoginContainer";
import SignupContainer from "./container/SignupContainer";
import Portfolio from "./container/Portfolio";
import HotelsContainer from "./container/HotelsContainer";
import RestaurantsContainer from "./container/RestaurantsContainer";
import ExitContainer from "./container/ExitContainer";

const hotelApi = "http://localhost:3000/hotels";
const restaurantsApi = "http://localhost:3000/restaurants";
const makeHotelReservationApi = "http://localhost:3000/hotels/reservation";
const getHotelReservationsApi = "http://localhost:3000/hotels/reservations";
const deleteHotelReservationsApi = "http://localhost:3000/hotels/delete";
const hotelFilterApi = "http://localhost:3000/hotels/filter";
const restaurantFilterApi = "http://localhost:3000/restaurants/filter";
const makeRestaurantReservationApi =
  "http://localhost:3000/restaurants/reservation";
const getRestaurantReservationsApi =
  "http://localhost:3000/restaurants/reservations";
const deleteRestaurantReservationsApi =
  "http://localhost:3000/restaurants/delete";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      travelers: 1,
      hotelIndex: 0,
      hotelsLength: 0,
      restaurantIndex: 0,
      restaurantsLength: 0,
      hotels: [],
      restaurants: [],
      userHotel: [],
      userRestaurants: []
    };
  }

  componentDidMount() {
    this.fetchHotels();
    this.fetchHotelReservations();
    this.fetchHotelsLength();
    this.fetchRestaurants();
    this.fetchRestaurantsLength();
    this.fetchRestaurantReservations();
  }

  handleIncrement = category => {
    switch (category) {
      case "hotel":
        this.setState(
          { hotelIndex: this.state.hotelIndex + 4 },
          this.fetchHotels
        );
        break;
      case "restaurant":
        this.setState(
          { restaurantIndex: this.state.restaurantIndex + 4 },
          this.fetchRestaurants
        );
    }
  };

  handleDecrement = category => {
    switch (category) {
      case "hotel":
        if (this.state.hotelIndex - 4 >= 0) {
          this.setState(
            { hotelIndex: this.state.hotelIndex - 4 },
            this.fetchHotels
          );
        } else {
          this.setState({ hotelIndex: 0 });
        }
        break;
      case "restaurant":
        if (this.state.restaurantIndex - 4 >= 0) {
          this.setState(
            { restaurantIndex: this.state.restaurantIndex - 4 },
            this.fetchRestaurants
          );
        } else {
          this.setState({ restaurantIndex: 0 });
        }
    }
  };

  fetchHotels = () => {
    return fetch(hotelFilterApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        index: this.state.hotelIndex
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ hotels: data }));
  };

  fetchHotelsLength = () => {
    return fetch(hotelApi)
      .then(res => res.json())
      .then(data => this.setState({ hotelsLength: data.length }));
  };

  reserveHotel = hotelId => {
    fetch(makeHotelReservationApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        hotel: hotelId,
        user: `${localStorage.getItem("user_id")}`
      }
    })
      .then(res => res.json())
      .then(data => this.fetchHotelReservations())
      .then(data => alert("Successfuly reserved hotel"));
  };

  fetchHotelReservations = () => {
    fetch(getHotelReservationsApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user: `${localStorage.getItem("user_id")}`
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ userHotel: data }));
  };

  deleteHotelReservations = hotelId => {
    fetch(deleteHotelReservationsApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        hotel: hotelId,
        user: `${localStorage.getItem("user_id")}`
      }
    }).then(this.setState({ userHotel: [] }));
  };

  previousHotels = () => {
    if (this.state.hotelIndex >= 3) {
      return true;
    }
  };

  nextHotels = () => {
    if (this.state.hotelIndex < this.state.hotelsLength - 3) {
      return true;
    }
  };

  fetchRestaurants = () => {
    return fetch(restaurantFilterApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        index: this.state.restaurantIndex
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ restaurants: data }));
  };

  fetchRestaurantsLength = () => {
    return fetch(restaurantsApi)
      .then(res => res.json())
      .then(data => this.setState({ restaurantsLength: data.length }));
  };

  reserveRestaurant = restaurantId => {
    fetch(makeRestaurantReservationApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        restaurant: restaurantId,
        user: `${localStorage.getItem("user_id")}`
      }
    })
      .then(res => res.json())
      .then(data => this.fetchRestaurantReservations())
      .then(data => alert("Successfuly reserved restaurant"));
  };

  fetchRestaurantReservations = () => {
    fetch(getRestaurantReservationsApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user: `${localStorage.getItem("user_id")}`
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ userRestaurants: data }));
  };

  deleteRestaurantReservations = restaurantId => {
    fetch(deleteRestaurantReservationsApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        restaurant: restaurantId,
        user: `${localStorage.getItem("user_id")}`
      }
    })
      .then(res => console.log(res))
      .then(data => this.fetchRestaurantReservations());
  };

  previousRestaurants = () => {
    if (this.state.restaurantIndex >= 3) {
      return true;
    }
  };

  nextRestaurants = () => {
    if (this.state.restaurantIndex < this.state.restaurantsLength - 3) {
      return true;
    }
  };

  setTravelerState = value => {
    this.setState({ travelers: value });
  };

  render() {
    return (
      <>
        <Router>
          <Route
            exact
            path="/"
            render={props => (
              <LoginContainer {...props} setState={this.setTravelerState} />
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <SignupContainer {...props} setState={this.setTravelerState} />
            )}
          />
          <Route
            path="/exit"
            render={() => (
              <ExitContainer
                hotel={this.state.userHotel}
                restaurants={this.state.userRestaurants}
                travelers={this.state.travelers}
              />
            )}
            hotelTotal={this.state.hotelTotal}
            setHotelTotal={this.setHotelTotal}
          />
          <Route
            path="/portfolio"
            render={() => (
              <Portfolio
                hotel={this.state.userHotel}
                travelers={this.state.travelers}
                restaurants={this.state.userRestaurants}
                deleteHotel={this.deleteHotelReservations}
                deleteRestaurant={this.deleteRestaurantReservations}
                fetchHotel={this.fetchHotelReservations}
                fetchRestaurant={this.fetchRestaurantReservations}
              />
            )}
          />
          <Route
            path="/hotels"
            render={() => (
              <HotelsContainer
                index={this.state.hotelIndex}
                increment={this.handleIncrement}
                decrement={this.handleDecrement}
                hotels={this.state.hotels}
                reserve={this.reserveHotel}
                previous={this.previousHotels}
                next={this.nextHotels}
                refetch={this.refetchHotels}
              />
            )}
          />
          <Route
            path="/restaurants"
            render={() => (
              <RestaurantsContainer
                increment={this.handleIncrement}
                decrement={this.handleDecrement}
                restaurants={this.state.restaurants}
                reserve={this.reserveRestaurant}
                previous={this.previousRestaurants}
                next={this.nextRestaurants}
              />
            )}
          />
        </Router>
      </>
    );
  }
}

export default App;
