import React, { Fragment } from 'react'
import { Divider, Icon, Grid, Header, Segment, Button, Form}  from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const CreateAccountPage =  (props) => {

	return (  
		
	<Grid centered>

		 <Segment inverted padded textAlign='center' style={{opacity:.7}}>
		 	<Icon name='user circle' size='massive' />
		 	<Divider />
		 	<Form padding>
		 		<Form.Field>
		 			<input placeholder='username' />
		 		</Form.Field>
		 		<Form.Field>
		 			<input type='password' placeholder='password' />
		 		</Form.Field>
		 		<Button content='Login' color='teal'/>
		 	</Form>
		 		<Divider horizontal inverted >Or</Divider>
		 		<Link to='/users/new'><Button content='Create an Account' color='olive'/></Link>
		 </Segment>
	</Grid>
	
		 
		
		)
}

export default CreateAccountPage