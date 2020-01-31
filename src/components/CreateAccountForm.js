import React, { Component, Fragment } from 'react'
import { Icon, Grid, Header, Segment, Button, Form}  from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postUser } from '../redux/actions'



class CreateAccountPage extends Component {

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

	render() {

		return (  
			
		<Grid centered>

			 <Segment inverted padded textAlign='center' style={{opacity:.7}}>
			 	<Icon name='user circle' size='massive' />
			 	<Header as='h2'>Create an Account</Header>
			 	<Form onSubmit={this.handleSubmit}>
			 		<Form.Group>
			 			<Form.Input name='firstname' placeholder='Firstname' />
			 			<Form.Input name='lastname' placeholder='Lastname' />
			 		</Form.Group>
			 		<Form.Input name='username' placeholder='Username' />
			 		<Form.Input name='password' type='password' placeholder='Password' />
			 		<Form.Input name='bio' placeholder='Tell us about yourself..' />
			 		<Form.Input name='location' placeholder='Where do you currently live?' />
			 		<Form.Input name='image'placeholder='Picture URL' />
			 		<Link to='/dashboard'><Button content='Create Account' color='teal'/></Link>
			 	</Form>
			 </Segment>
		</Grid>
			)
	}
}

const mapStateToProps = (state) => {

}

function mapDispatchToProps(dispatch) {
  return { postUser: (configObj) => dispatch(postUser(configObj))}
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountPage)