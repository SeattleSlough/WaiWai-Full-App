import React from 'react'
import {Link} from 'react-router-dom'

import HotelBill from '../component/HotelBill'

class ExitContainer extends React.Component {

    render() {
        return(

            <div>
                <h2><Link to='/portfolio'>Go To Your Itinerary</Link></h2>
                <div>
                    <div>
                        {this.props.hotel.map((obj,index) => (
                            <HotelBill key={index} cost={obj.rate} travelers={this.props.travelers}/>
                        ))}
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ExitContainer