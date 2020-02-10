import React from 'react'
import { Link, NavLink, withRouter } from "react-router-dom";
import { Dropdown, Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setCurrentUserToNull } from '../redux/actions'
const Navbar = (props) => {

	return (
	<Grid >
    	<Grid.Column floated='left' width={1}>
        <Link to='/'><Icon name='compass outline' size='huge'/ ></Link>
    	</Grid.Column>
    	<Grid.Column floated='right' width={1}>
     		{props.currentUser ? 
           <Dropdown
            button
            labeled
            icon='user circle'
            text={props.currentUser.username}
            direction='left'
            className='icon'
            >
            <Dropdown.Menu>
              <Dropdown.Item><Link to='/dashboard'>Dashboard</Link></Dropdown.Item>
              <Dropdown.Item><Link to='/profile'>Profile</Link></Dropdown.Item>
              <Dropdown.Item onClick={props.logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
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

const mapDispatchToProps = (dispatch) => {
  return { logout: () => dispatch(setCurrentUserToNull())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
     	{/*	<Icon name='question circle' size='huge' /> 
           <Link to='/profile'><Icon name='user' size='huge' /></Link>*/}