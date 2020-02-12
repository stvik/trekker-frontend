import React from 'react'
import CountryDropdown from './CountryDropdown'
import { Button, Grid, Header, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setSelectedCountryToNull} from '../redux/actions'



const Homepage = (props) => {
	const onRender = () => {
		props.setSelectedCountryToNull()
	}

	onRender()
	return (
		<Grid centered verticalAlign='middle' columns={2}>
			<Grid.Row centered>
			    <Header as='h1' icon textAlign='center'>
			      <Icon name='compass outline' className='logo' />
			      <Header.Content className='logo'>Trekker</Header.Content>
    			</Header>
			</Grid.Row>
			<Grid.Row centered columns={2}>
				<Grid.Column>
					<CountryDropdown history={props.history}/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Button className='color5' onClick={() => props.history.push(`/countries/${Math.floor(Math.random() * (1251 - 1001)) + 1001}`)}>Explore a Random Country</Button>
			</Grid.Row>
		</Grid>
		)
}

const mapDispatchToProps = (dispatch) => {
	return { setSelectedCountryToNull: () => dispatch(setSelectedCountryToNull())}
}

export default connect(null, mapDispatchToProps)(Homepage)

