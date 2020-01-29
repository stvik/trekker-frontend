import { combineReducers } from 'redux'
import * as action from './actions'


function countriesReducer(state = {countries: []}, action) {
	switch (action.type) {
		case 'ADD_COUNTRIES':
			return {
				...state,
				countries: action.countries
			}

		default:
			return state

	}
}

const rootReducer = combineReducers({
  countries: countriesReducer

})

export default rootReducer