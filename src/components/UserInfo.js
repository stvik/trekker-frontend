import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Image, Grid, Segment, Header } from 'semantic-ui-react'


const UserInfo = (props) => {
	return ( 

		<Fragment>
			<Grid.Column width={1} />
			<Grid.Column width={4}>
			 	<Image 
				 src={props.user.image}
				 size='large' 
				 rounded
				 />
		 	</Grid.Column>
		 	<Grid.Column width={10} >
		 		<Grid.Row>
		 			<Header as='h1'> {props.user.firstname} {props.user.lastname} </Header>
		 		</Grid.Row>
		 		<Grid.Row>
		 			<Segment inverted style={{opacity:.7}}> 
		 				<Header as='h4'>{props.user.username} | {props.user.location}</Header>
		 				<Header as='h4'>Bio:</Header>
		 				<p>{props.user.bio}</p>
		 			</Segment>
		 		</Grid.Row>
		 	</Grid.Column>
		 </Fragment>
		)
	
}

const mapStateToProps = (state) => {
	return {user: state.currentUser}
}



export default connect(mapStateToProps)(UserInfo)