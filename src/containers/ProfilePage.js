import React from 'react'
import { connect } from 'react-redux'
import { Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class ProfilePage extends  React.Component {

	render() {
	return (  
		<Grid>
			<Grid.Row>
				<Link to='/dashboard'><Button floated='left' icon='left chevron' color='teal' content='Back to Dashboard'/></Link>
			</Grid.Row>
			<Grid.Row>
				<p>some stuff</p>
			</Grid.Row>
			<Grid.Row centered> 
				<p>more stuff</p>
			</Grid.Row>
		 </Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {user: state.currentUser}
}



export default connect(mapStateToProps)(ProfilePage)