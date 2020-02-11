import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Icon } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import CountryShowPage from './containers/CountryShowPage'
import LoginPage from './containers/LoginPage'
import CreateAccountForm from './components/CreateAccountForm'
import Dashboard from './containers/Dashboard'
import ProfilePage from './containers/ProfilePage'
import { fetchCountries } from './redux/actions'
import Homepage from './components/Homepage'
import {Switch, Route, Redirect} from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      countryBackground: {
        id: 1011,
        name: "Argentina",
        background: 'https://images.unsplash.com/photo-1493724798364-c4ca5e3f5fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80'
    }
    }
  }


  componentDidMount () {
    this.props.fetchCountries()

    this.inverval = setInterval(() => this.setState({countryBackground: this.getRandomBackground()}),50000) 
  }

  componentWillUnmount() {
  clearInterval(this.interval);
  }

  getRandomBackground() {
    if (this.props.countries.length) {
      let countriesWithBG = this.props.countries.filter(country => country.background)
      let background = countriesWithBG[Math.floor(Math.random()*countriesWithBG.length)]
      return background
    }else {
      return { background: 'https://images.unsplash.com/photo-1493724798364-c4ca5e3f5fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1462&q=80' }
    }
  }
  render() {
      return (
      <>
       <div className='background' style={{backgroundImage: `url(${this.state.countryBackground.background})`}} >
        <Navbar countryBackground={this.state.countryBackground}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path='/countries/:countryId' component={CountryShowPage} />
          <Route exact path='/users/new' component={CreateAccountForm} />
          <Route exact path='/login' component={LoginPage} />
          {this.props.currentUser ? 
          <Fragment>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={ProfilePage} />
          </Fragment>
          :
          <Redirect to="/login" />
          }
        </Switch>
        </div>
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchCountries: () => dispatch(fetchCountries())}
}

function mapStateToProps(state) {
  return { countries: state.countries,
            currentUser: state.currentUser,

          }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
