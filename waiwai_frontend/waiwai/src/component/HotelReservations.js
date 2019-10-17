import React from 'react'

function HotelReservations(props) {
    return(
        <div>
            <div>
                <h3>{props.name}</h3>
                <img className="hotel_image" src={props.image}/>
                <button type="button" value={props.id} onClick={(ev) => props.delete(ev.target.value)}>Cancel Reservation</button>
            </div>

        </div>
    )
}

export default HotelReservations