import React from 'react'
import { Divider, Icon, Grid, Segment, Button, Form}  from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signInUser } from '../redux/actions'


const LoginPage =  (props) => {


	const handleSubmit = (e) => {
		const account = {
			username: e.currentTarget.username.value,
			password: e.currentTarget.password.value
			}
		props.signInUser(account)
		props.history.push('/dashboard')
	}

	return (  
		
	<Grid centered>

		 <Segment inverted textAlign='center' style={{opacity:.7}}>
		 	<Icon name='user circle' size='massive' />
		 	<Divider />
		 	<Form onSubmit={handleSubmit}>
		 		<Form.Input name='username' placeholder='username' />
		 		<Form.Input name='password' type='password' placeholder='password' />
		 		<Button content='Login' color='teal'/>
		 	</Form>
		 		<Divider horizontal inverted >Or</Divider>
		 		<Link to='/users/new'><Button content='Create an Account' color='olive'/></Link>
		 </Segment>
	</Grid>
	
		 
		
		)
}

const mapStateToProps = (state) => {
	return null
}

function mapDispatchToProps(dispatch) {
  return { signInUser: (account) => dispatch(signInUser(account))}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)