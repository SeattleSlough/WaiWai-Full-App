import React from 'react'

function HotelBill(props) {
    return (
        <div>
            <h4> total: {(props.cost)*(props.travelers)*10}</h4>
        </div>
    )
}

export default HotelBill