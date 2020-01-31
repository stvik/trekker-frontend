import React from 'react'
import { Link, NavLink, withRouter } from "react-router-dom";
import { Dropdown, Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Navbar = (props) => {
	return (
	<Grid >
    	<Grid.Column floated='left' width={1}>
        <Link to='/'><Icon name='compass outline' size='huge'/ ></Link>
    	</Grid.Column>
    	<Grid.Column floated='right' width={1}>
     		{props.currentUser ? 
            <Link to='/profile'><Icon name='user' size='huge' /></Link>
          :
          <Link to='/login' ><Icon name='sign-in' size='huge' /></Link>
        }
    	</Grid.Column>
  	</Grid>		
  	)
}

const mapStateToProps = (state) => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Navbar)
     	{/*	<Icon name='question circle' size='huge' /> 
          */}