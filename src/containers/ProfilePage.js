import React from 'react'
import { connect } from 'react-redux'
import { Button, Grid, Segment, Header } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import UserInfo from '../components/UserInfo'
import TravelList from './TravelList'
import { setSelectedCountryToNull } from '../redux/actions'
import ReviewItem from '../components/ReviewItem'


class ProfilePage extends  React.Component {

	constructor() {
		super()
		this.state ={
			reviews: []
		}
	}

	componentDidMount() {
		fetch(`http://localhost:3000/reviews?user_id=${this.props.user.id}`)
		.then(resp => resp.json())
		.then(data => this.setState({reviews: data}))
	}

	filterVisited = () => {
		return this.props.user.user_countries.filter(uc => uc.visited)
	}

	filterGoals = () => {
		return this.props.user.user_countries.filter(uc => uc.travel_goal)
	}

	render() {
	console.log(this.state)
	this.props.setSelectedCountryToNull()
	return (  
		<Grid>
			<Grid.Row>
				<Link to='/dashboard'><Button floated='left' icon='left chevron' color='teal' content='Back to Dashboard'/></Link>
			</Grid.Row>
			<Grid.Row>
				{this.props.user ? <UserInfo /> : <Redirect to='/login' />}
			</Grid.Row>
			<Grid.Row > 
				<Grid.Column width={3} ><TravelList title='Visited' countries={this.filterVisited()}/></Grid.Column>
				<Grid.Column width={10} >
						<Segment textAlign='left' inverted>
							<Header as='h1' textAlign='center'>Reviews By {this.props.user.firstname}</Header>
							{this.state.reviews.length ? 
								this.state.reviews.map(review => <ReviewItem review={review} />)
								:
								null
							}
						</Segment>

				</Grid.Column>
				<Grid.Column width={3} ><TravelList title='Travel Goals' countries={this.filterGoals()}/></Grid.Column>

			</Grid.Row>
		 </Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {user: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
	return { setSelectedCountryToNull: () => dispatch(setSelectedCountryToNull())}
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)