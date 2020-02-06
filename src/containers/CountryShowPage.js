import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchCountry } from '../redux/actions'
import { Button, Grid, Loader } from 'semantic-ui-react'
import CountryInfo from '../components/CountryInfo'
import { Link } from 'react-router-dom'
import TopCitiesContainer from './TopCitiesContainer'
import Map from '../components/Map'

class CountryShowPage extends  React.Component {

	componentDidMount() {
		const id = this.props.match.params.countryId
		this.props.fetchCountry(id)
	}


	render() {
	
	return (  
		<Grid>
			<Grid.Row>
				<Button floated='left' icon='left chevron' color='teal' content='Go Back' onClick={this.props.history.goBack}/>
			</Grid.Row>
			{this.props.country ?
				<Fragment> 
					<Grid.Row>
						<CountryInfo />
					</Grid.Row>
					<Grid.Row centered> 
						<TopCitiesContainer /> 
					</Grid.Row>
					<Grid.Row centered> 
						<Map />
					</Grid.Row>

				</Fragment>
			:
			<Loader active inline='centered' size='massive'/>

			}
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