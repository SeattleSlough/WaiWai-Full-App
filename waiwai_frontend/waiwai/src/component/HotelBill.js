import React from 'react'

function HotelBill(props) {
    const total = (props.cost) * 10
    return (
        <div>
            <h4> Hotel total (10 nights): ${total}</h4>
        </div>
    )
}

export default HotelBill