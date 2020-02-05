import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Icon } from 'semantic-ui-react'



class Map extends React.Component {

	constructor(){
		super()
		this.state = {
			viewport: {
				   width: '47vw',
				    height: '60vh',
				    latitude: 0,
				    longitude: 30,
				    zoom: 1
			}
		}
	}

	componentDidMount() {
		if (this.props.country) {
			this.setState({
			viewport: {
				width:'90vw',
				height:'50vh',
				latitude: this.props.country.latitude,
				longitude: this.props.country.longitude,
				zoom: 5
			}
		})
		}
	}

	showCities = () => {

		return (this.props.country.cities.map((city,index) => <Marker latitude={city.latitude} longitude={city.longitude} key={index}>
      														<Icon name='map pin' color='orange' /></Marker>))
	}

	showGoals = () => {
		return (this.props.goals.map((goal, index) => <Marker latitude={goal.country.latitude} longitude={goal.country.longitude} key={index}>
      														<Icon name='map pin' color='violet'/></Marker>))
	}

	showVisited = () => {
		return (this.props.visited.map((visit,index) => <Marker latitude={visit.country.latitude} longitude={visit.country.longitude}  key={index}>
      														<Icon name='map pin' color='orange'/></Marker>))
	}




	render() {
		return (
    		<ReactMapGL
        		{...this.state.viewport}
        		onViewportChange={(viewport) => this.setState({viewport})}
        		mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        		mapStyle="mapbox://styles/starnvik/ck68enpob04d31inctjcm0ryw"
      		>
      		{this.props.goals ? this.showGoals() : null}
      		{this.props.visited ? this.showVisited() : null}
      		{this.props.country ? this.showCities() : null}
      		</ReactMapGL>

		)
	}

}


const mapStateToProps = (state) => {
	return {country: state.selectedCountry}
}

export default connect(mapStateToProps)(Map)