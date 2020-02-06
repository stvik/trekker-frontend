import React from 'react'
import CountryDropdown from './CountryDropdown'
import { Button, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setSelectedCountryToNull} from '../redux/actions'



const Homepage = (props) => {
	const onRender = () => {
		props.setSelectedCountryToNull()
	}
	
	onRender()
	return (
		<Grid centered>
			<Grid.Row centered columns={2}>
				<Grid.Column>
					<CountryDropdown history={props.history}/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Button onClick={() => props.history.push(`/countries/${Math.floor(Math.random() * (250)) + 1}`)}>Explore a Random Country</Button>
			</Grid.Row>
		</Grid>
		)
}

const mapDispatchToProps = (dispatch) => {
	return { setSelectedCountryToNull: () => dispatch(setSelectedCountryToNull())}
}

export default connect(null, mapDispatchToProps)(Homepage)

