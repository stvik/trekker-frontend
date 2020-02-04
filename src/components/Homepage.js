import React, { fragment } from 'react'
import CountryDropdown from './CountryDropdown'
import { Button, Grid } from 'semantic-ui-react'



const Homepage = (props) => {
		console.log(props)
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


export default Homepage

