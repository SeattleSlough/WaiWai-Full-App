import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {Link as RouterLink} from 'react-router-dom'

const Hotel =  React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/hotels" {...props}/>))

function Empty(props) {

    const actions = <Button
    variant="contained"
    type="submit"
    label="Submit"
    color="default"
    value="Submit"
    component={Hotel}>
        Make a Hotel Reservation
    </Button>


    return (
    <div>
        <p className="regularText">You haven't yet booked a hotel.  Let's fix that!</p>
        {actions}
        {/* <button type="button"><Link to='/hotels'>Make a Hotel Reservation</Link></button> */}
    </div>
    )
}

export default Empty