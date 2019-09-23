import React from 'react'

function HotelBill(props) {
    return (
        <div>
            <h4> Hotel total (10 nights): ${(props.cost)*10}</h4>
        </div>
    )
}

export default HotelBill