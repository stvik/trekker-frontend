import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Modal, Form, Button } from 'semantic-ui-react'
import { createReview } from '../redux/actions'

class ReviewModal extends Component {

	constructor() {
		super()
		this.state = {
			review: {
				cities_visited: '',
				likes: '',
				dislikes: '',
				must_see: '',
				if_redo: '',
				should_know: '',
				food: '',
				additional_info: '',
			}
		
			}
	}

	updateFormValues = (e) => {
		this.setState({
			review: {...this.state.review,
				[e.currentTarget.name]: e.currentTarget.value,
			}
		})
	}

	handleSubmit = () => {
		const { cities_visited, likes, dislikes, must_see, if_redo, should_know, food, additional_info } = this.state.review
		const newReview = {
			cities_visited: cities_visited,
			likes: likes,
			dislikes: dislikes,
			must_see: must_see,
			if_redo: if_redo,
			should_know: should_know,
			food: food,
			additional_info: additional_info,
			user_country_id: this.findId(),
		}

		if (newReview.user_country_id) {
			const configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(newReview)
			}
			this.props.createReview(configObj)

		}


	}

	findId = () => {
		const countryId= this.props.country.id
		const uc = this.props.user.user_countries.find(user_country => user_country.country.id === countryId && user_country.visited)
		return uc.id
	}

	render() {
	return (
		<Modal trigger={<Button content='Write Review' />} closeIcon>
		    <Modal.Header>Write a Review for {this.props.country.name}</Modal.Header>
		    <Modal.Content>
		      <Form onSubmit={this.handleSubmit}>
		 			<Form.Input name='cities_visited' label='Cities visited' placeholder="Paris, Berlin, Bangkok..." onChange={this.updateFormValues}/>
		 			<Form.Input name='likes'  label='Things you liked' placeholder='Beaches, culture, nature...' onChange={this.updateFormValues}/>
			 		<Form.Input name='dislikes'  label='Things you disliked' placeholder='Crowded, bad weather, expensive...' onChange={this.updateFormValues}/>
			 		<Form.TextArea name='must_see'  label='Must see attractions' placeholder='What should you not miss out on if you go here?' onChange={this.updateFormValues}/>
			 		<Form.TextArea name='if_redo' label='If you could redo your trip...' placeholder='What would you do differently?' onChange={this.updateFormValues}/>
			 		<Form.TextArea name='should_know'  label='Things you should know before you go' placeholder='' onChange={this.updateFormValues}/>
			 		<Form.TextArea name='food'  label='Food recommendations' placeholder='Must try dishes, fantastic restaurants, drinks etc...' onChange={this.updateFormValues}/>
			 		<Form.TextArea name='additional_info'  label='Additional Info' placeholder='Anything else you would like to share?' onChange={this.updateFormValues}/>
			 		<Button color='teal' type='submit'>Submit Review</Button>
			 	</Form>
		    </Modal.Content>
		  </Modal>
  		)
	}

}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		country: state.selectedCountry
		}
}

const mapDispatchToProps = (dispatch) => {
	return { createReview: configObj => dispatch(createReview(configObj))}
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal)


