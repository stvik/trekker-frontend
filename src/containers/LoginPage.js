import React from 'react'
import { Divider, Icon, Grid, Segment, Button, Form}  from 'semantic-ui-react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signInUser } from '../redux/actions'


const LoginPage =  (props) => {


	const handleSubmit = (e) => {
		const account = {
			username: e.currentTarget.username.value,
			password: e.currentTarget.password.value
			}
		props.signInUser(account)
	}

	return (  
		
	<Grid centered>

		 <Segment inverted textAlign='center' className='transparent'>
		 	<Icon name='user circle' size='massive' />
		 	<Divider />
		 	<Form onSubmit={handleSubmit}>
		 		<Form.Input name='username' placeholder='username' />
		 		<Form.Input name='password' type='password' placeholder='password' />
		 		{props.currentUser ? <Redirect to='/dashboard' /> : <Button content='Login' className='color3'/> }
		 	</Form>
		 		<Divider horizontal inverted >Or</Divider>
		 		<Link to='/users/new'><Button content='Create an Account' className='color5'/></Link>
		 </Segment>
	</Grid>
	
		 
		
		)
}

const mapStateToProps = (state) => {
	return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return { signInUser: (account) => dispatch(signInUser(account))}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)