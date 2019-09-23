import React from 'react'
import {Link} from 'react-router-dom'

function EmptyRestaurant(props) {
    return (
        <div>
            <h2>Your Restaurants</h2>
            <p>You don't have any tables booked.  Let's fix that.</p>
            <button type="button"><Link to='/restaurants'>Book a table</Link></button>
        </div>
    )
}

export default EmptyRestaurant