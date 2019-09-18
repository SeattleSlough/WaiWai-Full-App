import React from 'react'

import LoaderHOC from '../HOC/LoaderHOC'

class HotelsContainer extends React.Component {
    render() {
        return(
            <div>
                {this.props.hotels.map(obj => {
                    console.log(obj)
                })}
            </div>
        )
    }
}

export default LoaderHOC('prop name')(HotelsContainer)