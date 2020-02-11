import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Icon, Popup } from 'semantic-ui-react'



class Map extends React.Component {

	constructor(){
		super()
		this.state = {
			viewport: {
				   width: '49vw',
				    height: '60vh',
				    latitude: 30,
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

		return (this.props.country.cities.map((city,index) =>	 (<Popup 
																trigger={(<Marker latitude={city.latitude} longitude={city.longitude} key={index}>
      																	<Icon name='map pin' color='orange' />
      																</Marker>)}
      																 content='hello' />)))
	}

	showGoals = () => {
		return (this.props.goals.map((goal, index) => <Marker latitude={goal.country.latitude} longitude={goal.country.longitude} key={index}>
      														<Icon name='flag' color='violet'/></Marker>))
	}

	showVisited = () => {
		return (this.props.visited.map((visit,index) => <Marker latitude={visit.country.latitude} longitude={visit.country.longitude}  key={index}>
      														<Icon name='flag' color='orange'/></Marker>))
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
      		{this.props.country ? <Marker latitude={this.props.country.latitude} longitude={this.props.country.longitude} >
      														<Icon name='flag' color='black'/></Marker> : null}
      		</ReactMapGL>

		)
	}

}


const mapStateToProps = (state) => {
	return {country: state.selectedCountry}
}

export default connect(mapStateToProps)(Map)