import React from 'react'
import {Link} from 'react-router-dom'

function Empty(props) {
    return (
    <div>
        <h2>Your Hotel</h2>
        <p>You haven't yet booked a hotel.  Let's fix that!</p>
        <button type="button"><Link to='/hotels'>Make a Hotel Reservation</Link></button>
    </div>
    )
}

export default Empty