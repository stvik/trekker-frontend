import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Image }  from 'semantic-ui-react'


const CountryCard = (props) => {
	console.log(props)
	return (

		<Card as={Link} to={`/countries/${props.country.id}`}>
			<Image src={props.country.flag}/>
			<Card.Content>
				<Card.Header>{props.country.name}</Card.Header>	
			</Card.Content>
		</Card>

	)
}


export default CountryCard