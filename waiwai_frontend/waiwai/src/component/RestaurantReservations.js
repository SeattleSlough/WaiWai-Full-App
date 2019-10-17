import React from 'react'

function RestaurantReservations(props) {
    return (
        <div>
            <div>
                <h3>{props.name}</h3>
                <img className="restaurant_image" src={props.image}/>
                <button type="button" value={props.id} onClick={(ev) => props.delete(ev.target.value)}>Cancel Reservation</button>
            </div>

        </div>
    )
}

export default RestaurantReservations