import React from 'react'

import LoaderHOC from '../HOC/LoaderHOC'
import HotelReservations from '../component/HotelReservations'

class InterimHotel extends React.Component {
    render() {
        return (
            <div>
            {this.props.hotel.map((obj, index) => (
                     <HotelReservations 
                        key={index}
                        name={obj.name}
                        image={obj.image}
                        id={obj.id} 
                        delete={this.props.delete}
                    />
                ))}
            </div>
        )
    }
}

export default LoaderHOC('hotel')(InterimHotel)