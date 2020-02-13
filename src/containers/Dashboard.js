import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Container } from 'semantic-ui-react'
import { Link , Redirect } from 'react-router-dom'
import CountryDropdown from '../components/CountryDropdown'
import TravelList from './TravelList'
import Map from '../components/Map'
import { setSelectedCountryToNull } from '../redux/actions'
import RecommendationsContainer from './RecommendationsContainer'

class Dashboard extends Component {

	filterVisited = () => {
		return this.props.currentUser.user_countries.filter(uc => uc.visited)
	}

	filterGoals = () => {
		return this.props.currentUser.user_countries.filter(uc => uc.travel_goal)
	}

	render() {
		this.props.setSelectedCountryToNull()
		return (
			
			<Fragment>
				<Container><CountryDropdown history={this.props.history}/></Container>
				<Grid centered>
					<Grid.Row centered>
						<Grid.Column width={4}>
							<TravelList title='Visited' countries={this.props.currentUser ? this.filterVisited() : null}/>
						</Grid.Column>
						<Grid.Column width={8} centered>
						 	<Container  >
						 		<Map 
						 		goals={this.props.currentUser ? this.filterGoals() : null}
						 		visited={this.props.currentUser ? this.filterVisited() : null}
						 		startingLat={30} 
						 		startingLong={0} 
						 		zoom={1} 
						 		/>
						 	</Container>
						 	<Grid.Row centered columns={2}>
								<Grid.Column>
									<RecommendationsContainer />
								</Grid.Column>
							</Grid.Row>
						</Grid.Column>
						<Grid.Column width={4}>
							<TravelList title='Travel Goals' countries={this.props.currentUser ? this.filterGoals() : null}/>
						</Grid.Column>
					</Grid.Row>
					


				</Grid>
				
			</Fragment> 
			
		) 

	
			
	}
}

const mapStateToProps = (state) => {
	return {currentUser: state.currentUser}
}
const mapDispatchToProps = (dispatch) => {
	return { setSelectedCountryToNull: () => dispatch(setSelectedCountryToNull())}
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)