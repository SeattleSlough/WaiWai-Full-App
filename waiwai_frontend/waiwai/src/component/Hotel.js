import React from 'react'

function Hotel(props) {
    return(
        <div>
            <h3>{props.name}</h3>
            <img className="hotel_image"
                src={props.image}
            />
            <h6>Stars: {props.stars}</h6>
            <h6>Room: {props.room}</h6>
            <h6>Daily rate: {props.rate}</h6>
            <button type="button" value={props.id} onClick={(ev) => props.reserve(ev.target.value)}>Reserve</button>
        </div>
    )
}

export default Hotel