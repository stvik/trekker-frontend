import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import './App.css';
import Navbar from './components/Navbar'
import CountryShowPage from './containers/CountryShowPage'
import LoginPage from './containers/LoginPage'
import CreateAccountForm from './components/CreateAccountForm'
import Dashboard from './containers/Dashboard'
import ProfilePage from './containers/ProfilePage'
import { fetchCountries } from './redux/actions'
import Homepage from './components/Homepage'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  componentDidMount () {
    this.props.fetchCountries()
  }

  render() {
      return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/users/new' component={CreateAccountForm} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route path='/countries/:countryId' component={CountryShowPage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchCountries: () => dispatch(fetchCountries())}
}

function mapStateToProps(state) {
  return { countries: state.countries}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
