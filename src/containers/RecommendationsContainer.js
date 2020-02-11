import React from 'react'
import { connect } from 'react-redux'
import { Segment,  Header} from 'semantic-ui-react'
import CountryItem from '../components/CountryItem'



const RecommendationsContainer =  (props) => {

	return (  
		
			<Segment inverted textAlign='center' >
				<Header as='h2'>Recommended Countries to Visit</Header>
			</Segment>
	
		)
}

const mapStateToProps = (state) => {
	return {user: state.currentUser}
}


export default connect(mapStateToProps)(RecommendationsContainer)