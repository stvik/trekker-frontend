import React, { Component} from 'react'
import { Icon, Grid, Header, Segment, Button, Form, Dropdown}  from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { postUser } from '../redux/actions'



class CreateAccountPage extends Component {

	// constructor() {
	// 	super()
	// 	this.state ={
	// 		visitedCountries: []
	// 	}
	// }

	handleSubmit = (e) => {
		const newAccount = {
			firstname: e.currentTarget.firstname.value,
			lastname: e.currentTarget.lastname.value,
			username: e.currentTarget.username.value,
			password: e.currentTarget.password.value,
			bio: e.currentTarget.bio.value,
			location: e.currentTarget.location.value,
			image: e.currentTarget.image.value,
		}
		const configObj = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(newAccount)
	}
		this.props.postUser(configObj)

	}

	// getCountryOptions() {
	// 	return this.props.countries.map(country => ({key: country.country_code.toLowerCase(),
	// 									 value: country.country_code.toLowerCase(), 
	// 									 text: country.name}))
	// }

	// onSelect = (e) => {
	// 	this.setState({
	// 		visitedCountries: [...this.state.visitedCountries, e.currentTarget.innerText]
	// 	})
	// }

	render() {

		return (  
			
		<Grid centered>

			 <Segment inverted padded textAlign='center' className='transparent'>
			 	<Icon name='user circle' size='massive' />
			 	<Header as='h2'>Create an Account</Header>
			 	<Form onSubmit={this.handleSubmit}>
			 		<Form.Group>
			 			<Form.Input name='firstname' placeholder='Firstname' />
			 			<Form.Input name='lastname' placeholder='Lastname' />
			 		</Form.Group>
			 		<Form.Input name='username' placeholder='Username' />
			 		<Form.Input name='password' type='password' placeholder='Password' />
			 		<Form.TextArea name='bio' placeholder='Tell us about yourself..' />
			 		<Form.Input name='location' placeholder='Where do you currently live?' />
			 		<Form.Input name='image'placeholder='Picture URL' />
			 		  {/*<Dropdown
			 		  		name='countries'
						    placeholder='Which countries have you been to?'
						    fluid
						    multiple
						    search
						    selection
						    options={this.getCountryOptions()}
						    onChange={this.onSelect}
						  /> */}
			 		{this.props.currentUser ?  <Redirect to='/dashboard' /> : <Button content='Create Account' className='color3'/>}
			 	</Form>
			 </Segment>
		</Grid>
			)
	}
}

const mapStateToProps = (state) => {
	return {currentUser: state.currentUser,
			countries: state.countries
	}
}

function mapDispatchToProps(dispatch) {
  return { postUser: (configObj) => dispatch(postUser(configObj))}
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountPage)