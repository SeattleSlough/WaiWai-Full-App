import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel
} from "@material-ui/core";

import HotelBill from "../component/HotelBill";
import RestaurantBill from "../component/RestaurantBill";
import Image from "../images/kisspng-hawaii-oahu-maui-map-island-hawaii-island-5ae1a9a6c2b2d3.3751889015247384707975.png";
import MainAppBar from "../component/MainAppBar";

const getHotelReservationsApi = "http://localhost:3000/hotels/reservations";
const getRestaurantReservationsApi =
  "http://localhost:3000/restaurants/reservations";
const Itinerary = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/portfolio" {...props} />
));

const FunFacts = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/portfolio" {...props} />
));

class ExitContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      hotelTotal: 0,
      restaurantTotal: 0,
      income: 0,
      savings: 0
    };
  }

  componentDidMount() {
    this.calculateTotalHotel();
    this.calculateTotalRestaurant();
  }

  calculateTotalHotel = () => {
    fetch(getHotelReservationsApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user: `${localStorage.user_id}`
      }
    })
      .then(res => res.json())
      .then(data =>
        data.map(obj => {
          this.setState({ hotelTotal: obj.rate * 10 });
        })
      );
  };

  calculateTotalRestaurant = () => {
    let total = 0;
    fetch(getRestaurantReservationsApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user: `${localStorage.user_id}`
      }
    })
      .then(res => res.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          total += data[i].cost_per_person * this.props.travelers;
        }
        console.log(total);
        return total;
      })
      .then(total => this.setState({ restaurantTotal: total }));
  };

  handleChangeIncome = ev => {
    this.setState({ income: ev.target.value });
  };

  handleChangeSavings = ev => {
    this.setState({ savings: ev.target.value });
  };

  tco = () => {
    if (this.state.income !== 0 && this.state.savings !== 0) {
      return true;
    }
  };

  render() {
    const styles = {
      container: {
        height: 4000,
        backgroundImage: `url(${Image})`
      }
    };

    let itineraryButton = (
      <Button
        variant="contained"
        type="submit"
        label="Submit"
        color="default"
        value="Submit"
        component={Itinerary}
      >
        Go To Itinerary
      </Button>
    );

    let tcoTile;
    if (this.tco()) {
      tcoTile = (
        <p className="finalText">
          Based on your income of ${this.state.income} and savings rate of{" "}
          {this.state.savings}%, it would take you{" "}
          {(
            (this.state.hotelTotal + this.state.restaurantTotal) /
            (this.state.income * (this.state.savings / 100))
          ).toFixed(2)}{" "}
          years to pay for this trip.
        </p>
      );
    } else {
      tcoTile = (
        <p className="finalText">
          Please enter your annual income and projected savings rate to see how
          Waiwai you are.
        </p>
      );
    }

    return (
      <div>
        <MainAppBar></MainAppBar>
        <Container style={styles.container}>
          <div>
            <div>
              <div className="billTitle">Butcher's Bill</div>
              <div>
                <div className="billHeader"> Hotel</div>
                {this.props.hotel.map((obj, index) => (
                  <HotelBill
                    key={index}
                    cost={obj.rate}
                    name={obj.name}
                    travelers={this.props.travelers}
                  />
                ))}
                <div>
                  <div className="billHeader"> Food</div>
                  {this.props.restaurants.map((obj, index) => (
                    <RestaurantBill
                      key={index}
                      name={obj.name}
                      cpp={obj.cost_per_person}
                      travelers={this.props.travelers}
                      total={this.props.setFoodTotal}
                    />
                  ))}
                </div>
              </div>
              <div className="billHeader">
                {" "}
                TOTAL COST: $
                {this.state.hotelTotal + this.state.restaurantTotal}{" "}
              </div>
            </div>
            <br />
            <hr />
            <h3 className="finalText">And in real life...</h3>
            <br />
            <FormControl variant="outlined" required={true} fullWidth={false}>
              <InputLabel htmlFor="my-input"> Annual Income:</InputLabel>
              <Input
                value={this.state.income}
                id="my-input"
                aria-describedby="my-helper-text"
                onChange={this.handleChangeIncome}
              />
              <FormHelperText id="my-helper-text">
                How much do you make a year?
              </FormHelperText>
            </FormControl>
            <br />
            <br />
            <FormControl variant="outlined" required={true} fullWidth={false}>
              <InputLabel htmlFor="my-input">Savings Rate:</InputLabel>
              <Input
                value={this.state.savings}
                id="my-input"
                aria-describedby="my-helper-text"
                onChange={this.handleChangeSavings}
              />
              <FormHelperText id="my-helper-text">
                How much will you save each year?
              </FormHelperText>
            </FormControl>

            {/* <form className="bill">
              <label>
                Annual Income:
                <input
                  type="number"
                  className="income"
                  placeholder="income"
                  name="income"
                  value={this.state.income}
                  min="1"
                  max="8"
                  onChange={this.handleChangeIncome}
                />
              </label>
              <br />
              <label>
                Annual Savings Rate (%):
                <input
                  type="number"
                  className="savings"
                  placeholder="savings"
                  name="savings"
                  value={this.state.savings}
                  min="1"
                  max="8"
                  onChange={this.handleChangeSavings}
                />
              </label>
            </form> */}
          </div>
          {tcoTile}
          <div className="itineraryButton">{itineraryButton}</div>
        </Container>
      </div>
    );
  }
}

export default ExitContainer;
