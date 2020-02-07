import React from 'react'
import { connect } from 'react-redux'
import { Grid, Image, Header, Card} from 'semantic-ui-react'
import CityCard from '../components/CityCard'


const TopCitiesContainer =  (props) => {
	return (  
		<Grid centered>
			<Grid.Row>
				<Header as='h1'>Most Popular Cities</Header>
			</Grid.Row>
			<Grid.Row centered>
				<Card.Group fluid>
						{props.country.cities.map((city, index) => <CityCard city={city} key={index}/>)}
				</Card.Group>
			</Grid.Row>
		</Grid>
	
		)
}

const mapStateToProps = (state) => {
	return {country: state.selectedCountry}
}


export default connect(mapStateToProps)(TopCitiesContainer)