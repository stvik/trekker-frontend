import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Image, Grid, Segment, Header, Icon, Modal, Form } from 'semantic-ui-react'
import EditModal from './editProfileModal'


class UserInfo extends Component {

	constructor() {
		super()
		this.state = {
			edit: false
		}
	}

	onEditClick = () => {
		this.setState({
			edit: true
		})
	}

	render() {

	return ( 

		<Grid centered>
			
			<Grid.Column width={4}>
			 	<Image 
				 src={this.props.user.image}
				 style={{width: '300px', height: '300px'}} 
				 circular
				 />
		 	</Grid.Column>
		 	<Grid.Column width={8}>
		 		<Grid.Row>
		 			<Segment inverted className='transparent'>
			 			<Header as='h1'> {this.props.user.firstname} {this.props.user.lastname} <EditModal user={this.props.user}/></Header>
			 			

		 				<Header as='h4'>{this.props.user.username} | {this.props.user.location} </Header> 
		 				<Header as='h4'>Bio:</Header>
		 				<p>{this.props.user.bio}</p>
		 			</Segment>
		 		</Grid.Row>
		 	</Grid.Column>
			</Grid>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {user: state.currentUser}
}

export default connect(mapStateToProps)(UserInfo)
