import React from 'react'
import { connect } from 'react-redux'
import { Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CountryShowPage extends  React.Component {

	render() {
		return null
	}
}

const mapStateToProps = (state) => {
	return {currentUser: state.currentUser}
}


export default connect(mapStateToProps)(CountryShowPage)