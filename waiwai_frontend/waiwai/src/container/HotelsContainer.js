import React from 'react'
import Hotel from '../component/Hotel'
import {Link} from 'react-router-dom'

import LoaderHOC from '../HOC/LoaderHOC'

class HotelsContainer extends React.Component {

    // componentDidUpdate() {
    //     this.props.refetch()
    // }    

    render() {
        {console.log(this.props.index)}
        let prevButton;
        let nextButton;
        if(this.props.previous()) {
             prevButton = <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.decrement(ev.target.value)}>Previous 3</button>
        }

        if(this.props.next()) {
            nextButton = <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.increment(ev.target.value)}>Next 3</button>
        }

        return(
            <div>
            <div>
                <h2><Link to='/portfolio'>Go To Your Itinerary</Link></h2>
                <br />
               {this.props.hotels.map((obj, index) => (
                    <Hotel 
                        key={index} 
                        id={obj.id} 
                        name={obj.name} 
                        rate={obj.rate} 
                        stars={obj.stars} 
                        room={obj.room} 
                        description={obj.description} 
                        image={obj.image}
                        reserve={this.props.reserve}
                    />
               ))}
            </div>
            <br />
            {prevButton}
            {nextButton}
              
            </div>
        )
    }
}

export default LoaderHOC('hotels')(HotelsContainer)