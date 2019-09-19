import React from 'react'

import LoaderHOC from '../HOC/LoaderHOC'
import Restaurant from '../component/Restaurant'
import {Link} from 'react-router-dom'

const restaurantKeysApi = 'http://localhost:3000/restaurantkeys'


class RestaurantsContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            restaurants: []
        }
    }

    createKey = (restaurantId) => {
        fetch(restaurantKeysApi, {
           method: 'POST',
           headers : {
               'Content-Type' : 'application/json',
               'Accept' : 'application/json'
           },
           body: JSON.stringify({
               user_id : localStorage.getItem("user_id"),
               hotel_id : restaurantId
           })
        })
        .then(res => console.log(res))
    }

    render() {
        return(
            <div>
            <Link to="/portfolio"> <h1>Back To Your Itinerary</h1> </Link>
                <div>
                    <div className="restaurant">
                        {this.props.restaurants.map((obj, index) => (
                            <Restaurant 
                                key={index} 
                                id={obj.id} 
                                name={obj.name} 
                                cpp={obj.cost_per_person} 
                                stars={obj.stars} 
                                description={obj.description} 
                                image={obj.image} 
                                createKey={this.createKey}
                            />
                        ))}
                     </div>   
               </div>
            </div>
        )
    }
}

export default LoaderHOC('restaurants')(RestaurantsContainer)