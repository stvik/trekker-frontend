import React from 'react'
import { connect } from 'react-redux'
import { fetchCountry } from '../redux/actions'
import { Button, Grid } from 'semantic-ui-react'
import CountryInfo from '../components/CountryInfo'
import { Link } from 'react-router-dom'

class CountryShowPage extends  React.Component {

	componentDidMount() {
		const id = this.props.match.params.countryId
		this.props.fetchCountry(id)
	}


	render() {

	return (  
		<Grid>
			<Grid.Row>
				<Link to='/'><Button floated='left' icon='left chevron' color='teal' content='Back to Search' /></Link>
			</Grid.Row>
			<Grid.Row>
				{this.props.country ? <CountryInfo /> : null}
			</Grid.Row>
		 </Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {country: state.selectedCountry}
}

const mapDispatchToProps = (dispatch) => {
	return { fetchCountry: (id) => dispatch(fetchCountry(id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryShowPage)