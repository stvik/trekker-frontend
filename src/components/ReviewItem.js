import React from 'react'
import { Segment, Icon, Header , Grid, Divider }  from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import swal from 'sweetalert'


const ReviewItem =  (props) => {
console.log(props)
	return (
	<Segment >

		 
		 	<Grid >
		 		<Grid.Column width={3}>
		 		<h2><Icon name='user circle' textAlign='center'/>{props.review.user.username}</h2>
		 		</Grid.Column>
		 		<Divider vertical />
		 		<Grid.Column width={6}>
			 		<h4>Cities Visited: </h4>
				 	<p>{props.review.cities_visited}</p>
				 	<h4>Likes: </h4>
				 	<p>{props.review.likes}</p>
				 	<h4>Dislikes: </h4>
				 	<p>{props.review.dislikes}</p>
				 	<h4>Things you must see: </h4>
				 	<p>{props.review.must_see}</p>
			 	</Grid.Column>
			 	<Grid.Column width={7}>
				 	<h4>Things you should know: </h4>
				 	<p>{props.review.should_know}</p>
				 	<h4>If I could redo my trip... </h4>
				 	<p>{props.review.if_redo}</p>
				 	<h4>Food recommendations: </h4>
				 	<p>{props.review.food}</p>
				 	<h4>Additional information: </h4>
				 	<p>{props.review.additional_info}</p>
				 </Grid.Column>
			</Grid>
		
	</Segment>	
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
		}
}

export default connect(mapStateToProps)(ReviewItem)