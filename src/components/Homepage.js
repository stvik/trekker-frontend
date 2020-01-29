import React from 'react'
import { connect } from 'react-redux'

class Homepage extends React.Component {

	constructor() {
		super()
		this.state = {
			searchValue: '',
		}
	}

	render() {
		console.log(this.props)
		return <div>Homepage</div>
	}


}

const mapStateToProps = (state) => {
	return {countries: state.countries}
}

export default connect(mapStateToProps)(Homepage)