import React from 'react'
import InterimHotel from '../component/InterimHotel'
import Empty from '../component/Empty'

class Portfolio extends React.Component {
   componentWillMount() {
       this.props.reservations()
   }

    isReserved = () => {
        const length = this.props.hotel.length
        if(length !== 0) {
            return true
        }
    }

    render() {
        let tile;
        if(this.isReserved()) {
            tile = <InterimHotel hotel={this.props.hotel} delete={this.props.delete}/>
        } else {
            tile = <Empty/>
            }
        
        return (
            <div>
                {tile}  
            </div>
        )
}
}

export default Portfolio