import React from 'react'
import { Link, NavLink, withRouter, Redirect } from "react-router-dom";
import { Dropdown, Grid, Icon, Popup, Button, Image, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setCurrentUserToNull } from '../redux/actions'
const Navbar = (props) => {

	return (
    <>
  <Grid >
    	<Grid.Column floated='left' width={3}>
        <Header as={Link} to='/'><h1 className='navbar'><Icon name='compass'/>Trekker</h1></Header>
    	</Grid.Column>
       
    	<Grid.Column floated='right' fluid width={1}>
     		{props.currentUser ? 
           <Dropdown
            labeled
            icon='user circle'
            size='large'
            direction='left'
            className='icon login'
            >
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/dashboard'>Dashboard</Dropdown.Item>
              <Dropdown.Item as={Link} to='/profile'>Profile</Dropdown.Item>
              <Dropdown.Item onClick={props.logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          :
          <Header as={Link} to='/login' textAlign='right'><h1 className='navbar'><Icon name='sign in'/></h1></Header>
        }
    	</Grid.Column>
  	</Grid>	
       <Popup
         trigger={<Icon link name='globe'  className='leftCorner' size='huge'/>}
         on='click'
         content={<div><h1>{props.countryBackground.name}</h1><Button className='color1' as={Link} to={`/countries/${props.countryBackground.id}`}>Go to Info Page</Button></div>}
         position='right'
         size='massive'
         inverted
         />
         </>
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