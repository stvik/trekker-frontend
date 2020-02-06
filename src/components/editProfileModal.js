import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Modal, Form, Button } from 'semantic-ui-react'
import { updateUser } from '../redux/actions'


class EditModal extends Component {

	constructor() {
		super()
		this.state = {
			editUser: {
				username: '',
				firstname: '',
				lastname: '',
				bio: '',
				location: '',
				image: '',
			}
		}
	}

	componentDidMount() {
		this.setState({
			editUser: this.props.user
		})
	}

	updateFormValues = (e) => {
		this.setState({
			editUser: {...this.state.editUser,
				[e.currentTarget.name]: e.currentTarget.value,
			}
		})
	}

	handleSubmit = () => {
		const {username, firstname, lastname, bio, location, image } = this.state.editUser
		const newInfo = {
			username: username,
			firstname: firstname,
			lastname, lastname,
			bio: bio,
			location: location,
			image: image,
		}

		const configObj = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(newInfo)
		}
		this.props.updateUser(configObj, this.state.editUser.id)

	}
	
	render() {
	return (
		<Modal trigger={<Icon link name='edit' />}>
			<Icon name='user circle' size='massive' />
		    <Modal.Header>Edit Profile</Modal.Header>
		    <Modal.Content>
		      <Form onSubmit={this.handleSubmit}>
		 		<Form.Group>
		 			<Form.Input name='firstname' value={this.state.editUser.firstname} label='Firstname' onChange={this.updateFormValues}/>
		 			<Form.Input name='lastname' value={this.state.editUser.lastname} label='Lastname' onChange={this.updateFormValues}/>
		 		</Form.Group>
			 		<Form.Input name='username' value={this.state.editUser.username} label='Username' onChange={this.updateFormValues}/>
			 		<Form.Input name='bio' value={this.state.editUser.bio} label='Bio' onChange={this.updateFormValues}/>
			 		<Form.Input name='location' value={this.state.editUser.location} label='Current Location' onChange={this.updateFormValues}/>
			 		<Form.Input name='image' value={this.state.editUser.image} label='Profile Picture' onChange={this.updateFormValues}/>
			 		<Button color='teal' type='submit'>Edit</Button>
			 	</Form>
		    </Modal.Content>
		  </Modal>
  		)
	}
}
	

const mapStateToProps = (state) => {
	return {user: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return { updateUser: (configObj, id) => dispatch(updateUser(configObj, id))}
}



export default connect(mapStateToProps, mapDispatchToProps)(EditModal)
