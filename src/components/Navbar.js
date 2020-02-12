import React from 'react'
import { Link, NavLink, withRouter, Redirect } from "react-router-dom";
import { Dropdown, Grid, Icon, Popup, Button, Image, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setCurrentUserToNull } from '../redux/actions'
const Navbar = (props) => {

	return (

  <Grid >
    	<Grid.Column floated='left' width={3}>
        <Header as={Link} to='/'><h1 className='navbar'><Icon name='compass'/>Trekker</h1></Header>
    	</Grid.Column>
          <Popup
         trigger={<Icon link name='question circle'  size='huge'/>}
         on='click'
         content={<div><h1>{props.countryBackground.name}</h1><Button className='color1' as={Link} to={`/countries/${props.countryBackground.id}`}>Go to Info Page</Button></div>}
         position='bottom right'
         size='huge'
         inverted
         />
    	<Grid.Column floated='right' fluid width={2}>
     		{props.currentUser ? 
           <Dropdown
            labeled
            icon='user circle'
            text={props.currentUser.firstname}
            direction='left'
            className='icon navbar'
            >
            <Dropdown.Menu>
              <Dropdown.Item><Link to='/dashboard'>Dashboard</Link></Dropdown.Item>
              <Dropdown.Item><Link to='/profile'>Profile</Link></Dropdown.Item>
              <Dropdown.Item onClick={props.logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          :
          <Header as={Link} to='/login' textAlign='right'><h1 className='navbar'>Log In</h1></Header>
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