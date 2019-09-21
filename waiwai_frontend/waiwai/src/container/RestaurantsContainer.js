import React from 'react'

import LoaderHOC from '../HOC/LoaderHOC'
import Restaurant from '../component/Restaurant'
import {Link} from 'react-router-dom'


class RestaurantsContainer extends React.Component {
    render() {
        let prevButton;
        let nextButton;
        if(this.props.previous()) {
             prevButton = <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.decrement(ev.target.value)}>Previous 3</button>
        }

        if(this.props.next()) {
            nextButton = <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.increment(ev.target.value)}>Next 3</button>
        }
        return (
            <div>
                <div>
                    <h2><Link to='/portfolio'>Go To Your Itinerary</Link></h2>
                    <br />
                    {this.props.restaurants.map((obj, index) => (
                        <Restaurant     
                            key={index} 
                            id={obj.id}
                            name={obj.name}
                            stars={obj.stars}
                            cpp={obj.cost_per_person}
                            description={obj.description}
                            image={obj.image}
                        />
                ))}
                </div>
                <br />
                {prevButton}
                {nextButton}
            </div>
        )
    }
}

export default LoaderHOC('restaurants')(RestaurantsContainer)