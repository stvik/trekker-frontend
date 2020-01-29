import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import './App.css';
import Navbar from './components/Navbar'
import { fetchCountries } from './redux/actions'
import Homepage from './components/Homepage'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  componentDidMount () {
    this.props.fetchCountries()

  }

  render() {
      return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </Fragment>
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
