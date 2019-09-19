import React from 'react'
import Hotel from '../component/Hotel'
import {Link} from 'react-router-dom'

import LoaderHOC from '../HOC/LoaderHOC'



class HotelsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            hotelKeys:[]
        }
    }

 

// setHotelKeyState = (array) => {
//     fetch(hotelKeysApi)
//     .then(res => res.json())
//     .then(data => {
//         this.setState({hotelKeys : {array}}, console.log(this.state.hotelKeys))})
//     }


    render() {
        return(
            <div>
            <Link to="/portfolio"> <h1>Back To Your Itinerary</h1> </Link>
                <div>
                    <div className="hotel">
                        {this.props.hotels.map((obj, index) => (
                            <Hotel 
                                key={index} 
                                id={obj.id} 
                                name={obj.name} 
                                rate={obj.rate} 
                                stars={obj.stars} 
                                room={obj.room} 
                                description={obj.description} 
                                image={obj.image} 
                                reservation={this.props.reservation}
                            />
                        ))}
                     </div>   
               </div>
            </div>
        )
    }
}

export default LoaderHOC('hotels')(HotelsContainer)