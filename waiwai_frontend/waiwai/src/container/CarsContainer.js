import React from 'react'
import {Link} from 'react-router-dom'

import LoaderHOC from '../HOC/LoaderHOC'

class CarsContainer extends React.Component {
    render() {
        return(
            <>
            </>
        )
    }
}

export default LoaderHOC('prop name')(CarsContainer)