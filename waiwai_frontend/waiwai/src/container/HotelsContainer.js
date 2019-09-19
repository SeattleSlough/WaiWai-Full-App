import React from 'react'
import Hotel from '../component/Hotel'

import LoaderHOC from '../HOC/LoaderHOC'

class HotelsContainer extends React.Component {

    render() {
        return(
            <div>
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
                        reserve={this.props.reserve}
                    />
               ))}
            </div>
        )
    }
}

export default LoaderHOC('hotels')(HotelsContainer)