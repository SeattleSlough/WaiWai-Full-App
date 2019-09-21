import React from 'react'

import HotelBill from '../component/HotelBill'

class ExitContainer extends React.Component {

    render() {
        return(
            <div>
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