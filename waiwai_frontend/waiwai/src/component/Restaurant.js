import React from 'react'

function Restaurant(props) {
    return (
        <div>
        <h3>{props.name}</h3>
        <img className="restaurant_image"
            src={props.image}
        />
        <h6>Stars: {props.stars}</h6>
        <h6>Per person: {props.cpp}</h6>
        <button type="button" value={props.id} onClick={(ev) => props.reserve(ev.target.value)}>Reserve</button>
    </div>
    )
}

export default Restaurant