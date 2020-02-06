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

		<Fragment>
			<Grid.Column width={1} />
			<Grid.Column width={4}>
			 	<Image 
				 src={this.props.user.image}
				 style={{width: '300px', height: '300px'}} 
				 circular
				 />
		 	</Grid.Column>
		 	<Grid.Column width={10} >
		 		<Grid.Row>
		 				<Header as='h1'> {this.props.user.firstname} {this.props.user.lastname}</Header>
		 				<EditModal user={this.props.user}/>
		 		</Grid.Row>
		 		<Grid.Row>
		 			<Segment inverted style={{opacity:.7}}>
		 				<Header as='h4'>{this.props.user.username} | {this.props.user.location} </Header> 
		 				<Header as='h4'>Bio:</Header>
		 				<p>{this.props.user.bio}</p>
		 			</Segment>
		 		</Grid.Row>
		 	</Grid.Column>
		 </Fragment>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {user: state.currentUser}
}

export default connect(mapStateToProps)(UserInfo)
