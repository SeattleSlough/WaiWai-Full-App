import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from '@material-ui/core'

import InterimHotel from '../component/InterimHotel'
import EmptyHotel from '../component/EmptyHotel'
import InterimRestaurant from '../component/InterimRestaurant'
import EmptyRestaurant from '../component/EmptyRestaurant'
import MainAppBar from '../component/MainAppBar'
import Image from '../images/kisspng-hawaii-oahu-maui-map-island-hawaii-island-5ae1a9a6c2b2d3.3751889015247384707975.png'
import {Button} from "@material-ui/core";
import {Link as RouterLink} from 'react-router-dom'

const Restaurants =  React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/restaurants" {...props}/>))

 

class Portfolio extends React.Component {

    componentDidMount() {
        this.props.fetchHotel();
        this.props.fetchRestaurant()
    }

    hotelIsReserved = () => {
        const length = this.props.hotel.length
        if(length !== 0 && this.props.hotel !== undefined) {
            return true
    }
}

    restaurantIsReserved = () => {
        const length = this.props.restaurants.length
        if(length !== 0 && this.props.restaurants !== undefined) {
            return true
        }
    }

    render() {
        let hotelTile;
        let restaurantTile;
        let button;
        if(this.hotelIsReserved()) {
            hotelTile = <InterimHotel hotel={this.props.hotel} delete={this.props.deleteHotel}/>
        } else {
            hotelTile = <EmptyHotel/>
            }
        
        if(this.restaurantIsReserved()) {
            restaurantTile = <InterimRestaurant restaurants={this.props.restaurants} delete={this.props.deleteRestaurant} />
            button =  <Button
            variant="contained"
            type="submit"
            label="Submit"
            color="default"
            value="Submit"
            component={Restaurants}>
                Book Another Restaurant
        </Button>
        } else {
            restaurantTile = <EmptyRestaurant/>
        }

        return (
            <div> 
                <MainAppBar travelers={this.props.travelers}></MainAppBar>
                
                <Container >               
                <div>
                <div >
                    <div className="hotels">Your Hotel</div>
                    {hotelTile}
                    <br />
                    <div>
                    <br />
                    <div className="hotels">Your Restaurants</div>
                        {restaurantTile}
                    </div> 
                    <br /> 
                </div>
                      {button}         
            </div>
            <br />
          
            {/* <button type="button"><Link to='/exit'></Link></button> */}
            </Container>

            </div>
        )
}
}

export default Portfolio