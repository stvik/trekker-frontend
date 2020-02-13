import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addToList, deleteListItem } from '../redux/actions'
import { Image, Grid, Segment, Header, Button, Message } from 'semantic-ui-react'
import swal from 'sweetalert'
import ReviewModal from './ReviewModal'



class CountryShowPage extends  Component {
	// sends through configured object to dispatch, using either addToGoalList or addToVisitedList
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
	//configures the new list item if goal button is clicked
	addToGoalList = () => {
		const newListItem = {
			user_id: this.props.user.id,
    		country_id: this.props.country.id,
			visited: false,
 			travel_goal: true
		}

		this.addToTravelList(newListItem)
	}
	//configures the new list item if visited button is clicked
	addToVisitedList = () => {
		const newListItem = {
				user_id: this.props.user.id,
	    		country_id: this.props.country.id,
				visited: true,
	 			travel_goal: false
		}

		this.addToTravelList(newListItem)
	}
	//formats number with commas
	numberWithCommas = (number) => {
   	 return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	formatWarning = () => {
		return this.props.country.warning.replace( /(<([^>]+)>)/ig, '').replace( /(&([^>]+);)/ig, "")
	}

	formatDescription = () => {
		return this.props.country.description.replace( /(<([^>]+)>)/ig, '').replace( /({([^>]+)})/ig, '').replace(/\(([^()]*)\)/ig, '').replace( /(&([^>]+);)/ig, '')
	}

	handleDelete = (id) => {
		swal({
			text: "Are you sure you want to remove this country?",
			icon:"warning",
			buttons: ['Actually, no..', "Yes, I'm sure"],
			dangerMode: true,
			})
			.then((willDelete) => {
			if (willDelete) {
				this.props.deleteListItem(id)
			}
		})
	}


	displayListButtonsIfLoggedIn = () => {
		const userCountry = this.props.user.user_countries.filter(uc => uc.country.id === this.props.country.id)

		if (userCountry.length && userCountry[0].visited) {
			return (
				<>
					<Button color='green' content="You've been here" disabled />
					<Button inverted color='red' content='Remove from list' onClick={() => this.handleDelete(userCountry[0].id)}/>
					<ReviewModal />
				</>)
		} 
		else if (userCountry.length && userCountry[0].travel_goal) {
			return( 
			<>
				<Button disabled color='green' content='Added to Travel Goals'/>
				<Button inverted color='red' content='Remove from list' onClick={() => this.handleDelete(userCountry[0].id)}/>
			</>	
			)
		}
		else {
		return (<>
			 			<Button inverted basic color='green' content='Add to Travel Goals' onClick={this.addToGoalList}/>
			 			<Button inverted basic color='green' content="I've been here" onClick={this.addToVisitedList}/>
			 			
		 		</>)
		}
	}


	render() {
		console.log(this.props.user)
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
		 		<Segment inverted className='transparent'> 
		 			<Header as='h1' className='segmentItem'>{country.name}</Header>
		 			{country.warning ?  <Message warning >
    										<Message.Header>Warning</Message.Header>
    										<p>{this.formatWarning()}</p>
 										 </Message>
 										 :
 										 null
 										}
		 			<p>{this.formatDescription()}</p>
		 			<Header as='h4'>Continent: {country.continent}</Header>
		 			<Header as='h4'>Population: {this.numberWithCommas(country.population)}</Header>
		 			<Header as='h4'>Language: {country.languages}</Header>
		 			<Header as='h4'>Currency: {country.currency}</Header>
		 			{this.props.user ?
		 			this.displayListButtonsIfLoggedIn()
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
	return { addToList: (configObj) => dispatch(addToList(configObj)),
			deleteListItem: (id) => dispatch(deleteListItem(id))}
}



export default connect(mapStateToProps, mapDispatchToProps)(CountryShowPage)