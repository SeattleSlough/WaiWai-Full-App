import React from 'react'


class Restaurant extends React.Component {



    render() {
        return (
            <div>
                <h4 className="hotel_name">{this.props.name}</h4>
                <img className="hotel_image" src={this.props.image}/>
                <h6>Stars: {this.props.stars}</h6>
                <h6>Per person: {this.props.cpp}</h6>
                <button type="button" value={this.props.id} className="reserve" onClick={(ev) => this.props.createKey(ev.target.value)}>Reserve</button>
            </div>
        )
    }
}

export default Restaurant