import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Container } from 'semantic-ui-react'
import { Link , Redirect } from 'react-router-dom'
import CountryDropdown from '../components/CountryDropdown'
import TravelList from './TravelList'
import Map from '../components/Map'
import { setSelectedCountryToNull } from '../redux/actions'

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
				<Grid>
					<Grid.Row >
						<Grid.Column width={4}>
							<TravelList title='Visited' countries={this.props.currentUser ? this.filterVisited() : null}/>
						</Grid.Column>
						<Grid.Column width={8}>
						 	<Container style={{minHeight:'500px'}}>
						 		<Map 
						 		goals={this.props.currentUser ? this.filterGoals() : null}
						 		visited={this.props.currentUser ? this.filterVisited() : null}
						 		startingLat={30} 
						 		startingLong={0} 
						 		zoom={1} 
						 		/>
						 	</Container>
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