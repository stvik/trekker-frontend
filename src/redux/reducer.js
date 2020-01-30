import { combineReducers } from 'redux'
import * as action from './actions'


function countriesReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_COUNTRIES':
			return action.countries
			
		default:
			return state

	}
}

function countryReducer(state = null, action) {
	switch (action.type) {
		case 'GET_SELECTED_COUNTRY':
			return  action.country
		default:
			return state
	}


}

function userReducer(state=null, action) {
	switch(action.type) {
		case 'SET_CURRENT_USER':
			return action.user
		default:
			return state
	}
}



const rootReducer = combineReducers({
  countries: countriesReducer,
  selectedCountry: countryReducer,
  currentUser: userReducer
})

export default rootReducer