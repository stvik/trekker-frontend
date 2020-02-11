import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchCountry } from '../redux/actions'
import { Button, Grid, Loader, Segment, Header, Item } from 'semantic-ui-react'
import CountryInfo from '../components/CountryInfo'
import { Link } from 'react-router-dom'
import TopCitiesContainer from './TopCitiesContainer'
import Map from '../components/Map'
import ReviewModal from '../components/ReviewModal'
import ReviewItem from '../components/ReviewItem'

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
						{this.props.country.cities.length ? <TopCitiesContainer /> : null }
					</Grid.Row>
					<Grid.Row centered> 
						<Map />
					</Grid.Row>
					<Grid.Row centered> 
						
						<Grid.Column width={10}>
						<Segment textAlign='left' inverted>
							<Header as='h1' textAlign='center'>Reviews</Header>
							{this.props.country.reviews.length ? 
								this.props.country.reviews.map(review => <ReviewItem review={review} />)
								:
								<Fragment>
									<Header as='h3'>There are no reviews for this country</Header>
									<Header as='h4'>Been here?</Header>
									<ReviewModal />
								</Fragment>
							}
						</Segment>
						</Grid.Column>
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