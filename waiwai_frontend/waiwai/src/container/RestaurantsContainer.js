import React from 'react'

import LoaderHOC from '../HOC/LoaderHOC'
import Restaurant from '../component/Restaurant'


class RestaurantsContainer extends React.Component {
    render() {
        return (
            <div>
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
        )
    }
}

export default LoaderHOC('restaurants')(RestaurantsContainer)