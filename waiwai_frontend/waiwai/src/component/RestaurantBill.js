import React from 'react'

function RestaurantBill(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>Total Bill ({props.travelers} person(s)): ${(props.cpp)*(props.travelers)}</h4>
        </div>
    )
}

export default RestaurantBill