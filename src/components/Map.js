import React from 'react';
import ReactDOM from 'react-dom';
import ReactMapGL, { Marker } from 'react-map-gl'
import { Icon } from 'semantic-ui-react'



class Map extends React.Component {

	constructor(){
		super()
		this.state = {
			viewport: {
				   width: 600,
				    height: 500,
				    latitude: 0,
				    longitude: 0,
				    zoom: 1
			}
		}
	}


	render() {
		return (
    		<ReactMapGL
        		{...this.state.viewport}
        		onViewportChange={(viewport) => this.setState({viewport})}
        		mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        		mapStyle="mapbox://styles/starnvik/ck68enpob04d31inctjcm0ryw"
      		>
      		{this.props.goals ? this.props.goals.map(goal => <Marker latitude={goal.country.latitude} longitude={goal.country.longitude}>
      														<Icon name='map pin' color='violet' /></Marker>) : null}
      		{this.props.visited ? this.props.visited.map(visit => <Marker latitude={visit.country.latitude} longitude={visit.country.longitude}>
      														<Icon name='map pin' color='orange' /></Marker>) : null}
      		</ReactMapGL>

		)
	}

}

export default Map