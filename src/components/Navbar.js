import React from 'react'
import { Link, NavLink, withRouter } from "react-router-dom";
import { Grid, Icon } from 'semantic-ui-react'

const Navbar = () => {
	return (
	<Grid >
    	<Grid.Column floated='left' width={1}>
     		<Icon name='question circle' size='huge' />
    	</Grid.Column>
    	<Grid.Column floated='right' width={1}>
     		<Link to='/login' ><Icon name='sign-in' size='huge' /></Link>
    	</Grid.Column>
  	</Grid>
		)


}

export default Navbar