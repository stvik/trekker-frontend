import React from 'react'
import { Item, Icon, Button}  from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { deleteListItem } from '../redux/actions'


const CountryItem =  (props) => {
	const deleteItem = () => {
		swal({
			text: "Are you sure you want to remove this country?",
			icon:"warning",
			buttons: ['Actually, no..', "Yes, I'm sure"],
			dangerMode: true,
		})
		.then((willDelete) => {
			if (willDelete) {
				props.deleteListItem(props.userCountryId)
				swal("It's gone!", {icon: 'success'},)
			}
			})
	}

	return (

	<Item inverted>
		 < Item.Image  
		 src={props.country.flag}
		 />	
		 <Item.Content verticalAlign="middle">
			<Item.Header><Link to={`/countries/${props.country.id}`}>{props.country.name}</Link></Item.Header>
			<Item.Extra>
	          <Button circular basic size='small' color='red' floated='right' onClick={deleteItem}><Icon name='delete'/></Button>
	        </Item.Extra>
		</Item.Content>
	</Item>	
	
	)
}

const mapDispatchToProps = (dispatch) => {
	return { deleteListItem: (id) => dispatch(deleteListItem(id))}
}

export default connect(null, mapDispatchToProps)(CountryItem)