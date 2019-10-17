import React from 'react'

function HotelBill(props) {
    const total = (props.cost) * 10
    return (
        <div>
            <div className="lineItemHeader">{props.name}</div>
            <div className="lineItemSubheader"> Hotel total (10 nights): ${total}</div>
        </div>
    )
}

export default HotelBill