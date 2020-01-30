import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Image, Grid, Segment, Header } from 'semantic-ui-react'


class CountryShowPage extends  React.Component {

	displayPicture = () => {
		if (this.props.country) {
		 return 
		} else {
			return null
		}
	}

	render() {
		const country = this.props.country
		console.log(country)
	return ( 

		<Fragment>
			<Grid.Column width={1} />
			<Grid.Column width={4}>
			 	<Image 
				 src={`https://source.unsplash.com/random/900%C3%97700/?${country.name}`}
				 size='medium' 
				 rounded 
				 />
		 	</Grid.Column>
		 	<Grid.Column width={10} >
		 		<Segment inverted style={{opacity:.7}}> 
		 			<Header as='h1'>{country.name}</Header>
		 			<p>{country.description}</p>
		 			<Header as='h4'>Continent: {country.continent}</Header>
		 			<Header as='h4'>Population: {country.population}</Header>
		 			<Header as='h4'>Languages: {country.languages}</Header>
		 			<Header as='h4'>Currency: {country.currency}</Header>

		 		</Segment>
		 	</Grid.Column>
		 </Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {country: state.selectedCountry}
}



export default connect(mapStateToProps)(CountryShowPage)