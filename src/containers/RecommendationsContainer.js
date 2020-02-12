import React from 'react'
import { connect } from 'react-redux'
import { Segment,  Header, Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CountryCard from '../components/CountryCard'




const RecommendationsContainer =  (props) => {

	const filterDangerous = () => {
		return props.countries.filter(country => !country.warning)
	}

	const getRandomCountries = () => {
		let random_countries = []
		const countries = filterDangerous()
		for (let i=0; i < 4; i++){
			const random = countries[(Math.floor(Math.random() * countries.length))]
			random_countries.push(random)
		}	
		return random_countries
	}

	return (  
		
			<Segment inverted textAlign='center'className='transparent' >
				<Header as='h2'>Recommended Countries to Visit</Header>
				<Card.Group centered itemsPerRow={4} >
					{getRandomCountries().map(country => (<CountryCard country={country}/>))}
				</Card.Group>
			</Segment>
	
		)
}

const mapStateToProps = (state) => {
	return {countries: state.countries}
}


export default connect(mapStateToProps)(RecommendationsContainer)