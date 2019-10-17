import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {Link as RouterLink} from 'react-router-dom'

const Restaurants =  React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/restaurants" {...props}/>))

function EmptyRestaurant(props) {

    const actions = <Button
    variant="contained"
    type="submit"
    label="Submit"
    color="default"
    value="Submit"
    component={Restaurants}>
        Book a table
    </Button>


    return (
    <div>
        <p className="regularText">You have no tables booked.  Let's fix that!</p>
        {actions}
        {/* <button type="button"><Link to='/hotels'>Make a Hotel Reservation</Link></button> */}
    </div>
    )
}

export default EmptyRestaurant