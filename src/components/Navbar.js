import React from 'react'
import { Link, NavLink, withRouter, Redirect } from "react-router-dom";
import { Dropdown, Grid, Icon, Popup, Button, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setCurrentUserToNull } from '../redux/actions'
const Navbar = (props) => {

	return (
	<Grid >
    	<Grid.Column floated='left' width={3}>
        <Link to='/'><p className='logo'><Image size='tiny' src='https://freesvg.org/img/Compass-Rose.png'/ >Trekker</p></Link>
    	</Grid.Column>
    	<Grid.Column floated='right' fluid width={2}>

         <Popup
         trigger={<Icon link name='question circle'  size='huge'/>}
         on='click'
         content={<div><h1>{props.countryBackground.name}</h1><Button ><Link to={`/countries/${props.countryBackground.id}`}>Go to Info Page</Link></Button></div>}
         position='bottom right'
         size='huge'
         inverted
         />
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