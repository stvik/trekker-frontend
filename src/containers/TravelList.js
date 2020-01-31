import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Item, Header} from 'semantic-ui-react'



const TravelList =  (props) => {
	return (  
		
			<Segment inverted textAlign='center' style={{opacity:.7}}>
				<Header as='h1'>{props.title}</Header>
				<Item>
					<Item.Image size='small' src='https://images6.alphacoders.com/903/thumb-350-903645.jpg'/>
					<Item.Header>Country Name</Item.Header>
				</Item>
				<Item>
					<Item.Image size='small' src='https://images6.alphacoders.com/903/thumb-350-903645.jpg'/>
					<Item.Header>Country Name</Item.Header>
				</Item>
				<Item>
					<Item.Image size='small' src='https://images6.alphacoders.com/903/thumb-350-903645.jpg'/>
					<Item.Header>Country Name</Item.Header>
				</Item>
				<Item>
					<Item.Image size='small' src='https://images6.alphacoders.com/903/thumb-350-903645.jpg'/>
					<Item.Header>Country Name</Item.Header>
				</Item>	
			</Segment>
	
		)
}

const mapStateToProps = (state) => {
	return {user: state.currentUser}
}


export default connect(mapStateToProps)(TravelList)