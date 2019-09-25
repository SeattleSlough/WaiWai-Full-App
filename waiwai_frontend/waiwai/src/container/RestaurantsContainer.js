import React from 'react'

import LoaderHOC from '../HOC/LoaderHOC'
import Restaurant from '../component/Restaurant'
import {Link} from 'react-router-dom'
import { Container } from '@material-ui/core';
import {Grid} from '@material-ui/core'
import {Button} from '@material-ui/core'

import Image from '../images/kisspng-hawaii-oahu-maui-map-island-hawaii-island-5ae1a9a6c2b2d3.3751889015247384707975.png'
import MainAppBar from '../component/MainAppBar'
import RestaurantCard from '../component/RestaurantCard'


class RestaurantsContainer extends React.Component {
    render() {
        let prevButton;
        let nextButton;
        if(this.props.previous()) {

            prevButton = <Button
                            style={{width: 115}}
                            variant="contained"
                            type="submit"
                            label="Submit"
                            color="default"
                            value="restaurant"
                            onClick={(ev) => this.props.decrement(ev.currentTarget.value)}>Previous
             </Button>
            //  <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.decrement(ev.target.value)}>Previous 3</button>
        } else {
            prevButton = <Button style={{opacity: .3, width: 115}}
                            variant="contained"
                            type="submit"
                            label="Submit"
                            color="default"
                        >Previous
                    </Button>
        }

        if(this.props.next()) {
            nextButton = <Button
                            style={{width: 100}}
                            variant="contained"
                            type="submit"
                            label="Submit"
                            color="default"
                            value="restaurant"
                            onClick={(ev) => this.props.increment(ev.currentTarget.value)}>Next
            </Button>
            // <button type="button" className="increment_button" value="hotel" onClick={(ev) => this.props.increment(ev.target.value)}>Next 3</button>
        } else {
            nextButton = <Button style={{opacity: .3, width: 100}}
                            variant="contained"
                            type="submit"
                            label="Submit"
                            color="default"
                        >Next
                    </Button>
        }

        const styles = {
            container : {
                height: 4000,
                backgroundImage: `url(${Image})`
            },
        }

        return (
            <div>
                <div>
                <MainAppBar></MainAppBar>
                <Container fixed style={styles.container}>
                <div className="hotels">Restaurants</div>
                    <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    >
                    <br />
                    {this.props.restaurants.map((obj, index) => (
                        <RestaurantCard     
                            key={index} 
                            id={obj.id}
                            name={obj.name}
                            stars={obj.stars}
                            cpp={obj.cost_per_person}
                            description={obj.description}
                            image={obj.image}
                            reserve={this.props.reserve}
                        />
                ))}
                <br />
                {prevButton}
                {nextButton}
            </Grid>
            </Container>
                </div>
            </div>
        )
    }
}

export default LoaderHOC('restaurants')(RestaurantsContainer)