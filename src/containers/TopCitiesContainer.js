import React from 'react'
import { connect } from 'react-redux'
import { Grid, Image, Segment } from 'semantic-ui-react'
import CityCard from '../components/CityCard'


const TopCitiesContainer =  (props) => {
	return (  
		<Grid centered>
			<Segment inverted padded textAlign='center' style={{opacity:.7}}>
				<Image.Group size='small' floated='center'>
					{props.country.cities.map((city, index) => <CityCard city={city} key={index}/>)}
				</Image.Group>
			</Segment>
		</Grid>
	
		)
}

const mapStateToProps = (state) => {
	return {country: state.selectedCountry}
}


export default connect(mapStateToProps)(TopCitiesContainer)