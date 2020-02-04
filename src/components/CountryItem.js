import React, { Fragment } from 'react'
import { Header, Item, Image}  from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const CountryItem =  (props) => {

	console.log(props)
	return (

	<Item inverted>
		 < Item.Image  
		 src={props.country.flag}
		 />	
		 <Item.Content >
			<Link to={`/countries/${props.country.id}`}><Item.Header >{props.country.name}</Item.Header></Link>
		</Item.Content>
	</Item>	
	
	)
}

export default CountryItem