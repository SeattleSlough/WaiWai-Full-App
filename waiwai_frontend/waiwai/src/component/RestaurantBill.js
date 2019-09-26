import React from 'react'

function RestaurantBill(props) {
    return (
        <div>
            <div className="lineItemHeader">{props.name}</div>
            <div className="lineItemSubheader">Total Bill ({props.travelers} person(s)): ${(props.cpp)*(props.travelers)}</div>
        </div>
    )
}

export default RestaurantBill