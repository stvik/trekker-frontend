import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addToList } from '../redux/actions'
import { Image, Grid, Segment, Header, Button, Message } from 'semantic-ui-react'
import swal from 'sweetalert'
import ReviewModal from './ReviewModal'


class CountryShowPage extends  Component {

	addToTravelList = (listItem) => {

		const configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(listItem)
			}
		this.props.addToList(configObj)

	}

	addToGoalList = () => {
		const newListItem = {
			user_id: this.props.user.id,
    		country_id: this.props.country.id,
			visited: false,
 			travel_goal: true
		}

		this.addToTravelList(newListItem)
	}

	addToVisitedList = () => {
		const newListItem = {
				user_id: this.props.user.id,
	    		country_id: this.props.country.id,
				visited: true,
	 			travel_goal: false
		}

		this.addToTravelList(newListItem)
	}

	numberWithCommas = (number) => {
   	 return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}




	render() {
		const country = this.props.country
	return ( 

		<Fragment>
			<Grid.Column width={1} />
			<Grid.Column width={4}>
			 	<Image 
				 src={country.flag}
				 size='large' 
				 rounded 
				 />
		 	</Grid.Column>
		 	<Grid.Column width={10} >
		 		<Segment inverted className='infoSegment'> 
		 			<Header as='h1' className='segmentItem'>{country.name}</Header>
		 			{country.warning ?  <Message warning >
    										<Message.Header>Warning</Message.Header>
    										<p>{country.warning.replace( /(<([^>]+)>)/ig, '').replace( /(&([^>]+);)/ig, "")}</p>
 										 </Message>
 										 :
 										 null
 										}
		 			<p>{country.description.replace( /(<([^>]+)>)/ig, '').replace( /({([^>]+)})/ig, '').replace(/\(([^()]*)\)/ig, '').replace( /(&([^>]+);)/ig, '')}</p>
		 			<Header as='h4'>Continent: {country.continent}</Header>
		 			<Header as='h4'>Population: {this.numberWithCommas(country.population)}</Header>
		 			<Header as='h4'>Language: {country.languages}</Header>
		 			<Header as='h4'>Currency: {country.currency}</Header>
		 			{this.props.user ?
		 			<>
			 			<Button inverted basic color='green' content='Add to Travel Goals' onClick={this.addToGoalList}/>
			 			<Button inverted basic color='green' content="I've been here" onClick={this.addToVisitedList}/>
			 			<ReviewModal />
		 			</>
		 			:
		 			null}
		 		</Segment>
		 	
		 	</Grid.Column>
		 </Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {country: state.selectedCountry, 
			user: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
	return { addToList: (configObj) => dispatch(addToList(configObj))}
}



export default connect(mapStateToProps, mapDispatchToProps)(CountryShowPage)