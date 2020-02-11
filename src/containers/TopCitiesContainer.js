import React from 'react'
import { connect } from 'react-redux'
import { Grid, Image, Header, Card, Segment, Icon} from 'semantic-ui-react'
import CityCard from '../components/CityCard'


class TopCitiesContainer extends React.Component {

	constructor() {
		super()
		this.state ={
			shownCities: [],
			page: 1
			}
	}

	componentDidMount() {
		this.setState({
			shownCities: this.props.country.cities.slice(0, 4)
		})
	}

	nextPage = () => {

		const startIndex = 4*this.state.page
		const endIndex = startIndex + 4
		if (startIndex < this.props.country.cities.length) {
			this.setState({
				shownCities: this.props.country.cities.slice(startIndex, endIndex),
				page: this.state.page + 1
			})
		}
	}

	backPage = () => {
		const startIndex = 4*(this.state.page - 2)
		const endIndex = startIndex + 4
		if (startIndex >= 0) {
			this.setState({
				shownCities: this.props.country.cities.slice(startIndex, endIndex),
				page: this.state.page - 1
			})
		}
	}
	
	render() {
	return (  

		<Segment inverted className='citiesContainer'>
			<Grid centered>

				<Grid.Row>
					<Header as='h1' inverted>Most Popular Cities</Header>
				</Grid.Row>
				<Grid.Row centered>
					<Grid.Column width={1} verticalAlign='middle'>
						<Icon name='caret left' size='huge' link onClick={this.backPage}/>
					</Grid.Column>
					<Grid.Column width={14}>
					<Card.Group centered itemsPerRow={4} fluid>
							{this.state.shownCities.map((city, index) => <CityCard city={city} key={index}/>)}
					</Card.Group>
					</Grid.Column>
					<Grid.Column width={1} verticalAlign='middle'>
						<Icon name='caret right' size='huge' link onClick={this.nextPage}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

			)
	}
}

const mapStateToProps = (state) => {
	return {country: state.selectedCountry}
}


export default connect(mapStateToProps)(TopCitiesContainer)