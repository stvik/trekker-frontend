import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CountryDropdown from '../components/CountryDropdown'
import TravelList from './TravelList'

class Dashboard extends Component {

	render() {
		return (
			<Fragment>
				<CountryDropdown history={this.props.history}/>
				<Grid>
					<Grid.Row >
						<Grid.Column width={4}>
							<TravelList title='Visited'/>
						</Grid.Column>
						<Grid.Column width={8}>
							<Segment inverted style={{opacity:.7}} textAlign='center'> <Header as='h1'>MAP</Header></Segment>
						</Grid.Column>
						<Grid.Column width={4}>
							<TravelList title='Travel Goals'/>
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


export default connect(mapStateToProps)(Dashboard)