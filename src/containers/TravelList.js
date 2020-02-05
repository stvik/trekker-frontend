import React from 'react'
import { connect } from 'react-redux'
import { Segment, Item, Header} from 'semantic-ui-react'
import CountryItem from '../components/CountryItem'



const TravelList =  (props) => {

	return (  
		
			<Segment inverted textAlign='center' style={{opacity:.7}}>
				<Header as='h1'>{props.title}</Header>
				<Item.Group link>
					{props.countries ? props.countries.map(user_country => <CountryItem userCountryId={user_country.id} country={user_country.country}/>) : null}
				</Item.Group>
			</Segment>
	
		)
}

const mapStateToProps = (state) => {
	return {user: state.currentUser}
}


export default connect(mapStateToProps)(TravelList)