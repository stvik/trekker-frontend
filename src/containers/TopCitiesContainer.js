import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Grid, Image, Card, Segment } from 'semantic-ui-react'
import CityCard from '../components/CityCard'


const TopCitiesContainer =  (props) => {
	console.log(props)

	return (  
		<Grid centered>
			<Segment inverted padded textAlign='center' style={{opacity:.7}}>
				<Image.Group size='small' floated='center'>
					{props.country.cities.map(city => <CityCard city={city} />)}
				</Image.Group>
			</Segment>
		</Grid>
	
		)
}

const mapStateToProps = (state) => {
	return {country: state.selectedCountry}
}


export default connect(mapStateToProps)(TopCitiesContainer)