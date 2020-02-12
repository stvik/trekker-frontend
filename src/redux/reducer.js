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
		case 'SET_SELECTED_COUNTRY_TO_NULL':
		  	return null
		case 'ADD_REVIEW':
			return {...state,
				reviews: [...state.reviews, action.review]
			}
		case 'REMOVE_REVIEW':
			if (state) {
			return {...state,
				reviews: state.reviews.filter(review => review.id != action.review.id)}
			}
			else { return null}
		default:
			return state
	}


}

function userReducer(state=null, action) {
	switch(action.type) {
		case 'SET_CURRENT_USER':
			return action.user
		case 'REMOVE_USER_COUNTRY':
			return { ...state,
				user_countries: state.user_countries.filter(userCountry => userCountry.id != action.userCountry.id)
			}
		case 'ADD_USER_COUNTRY':
			return { ...state,
				user_countries: [...state.user_countries, action.userCountry]
			 }
		case 'SET_CURRENT_USER_TO_NULL':
			return null
		case 'REMOVE_REVIEW':
			return  {
				...state,
				user_countries: state.user_countries.map(uc => {
					if (uc.review && uc.review.id === action.review.id) {
						delete uc.review
						return uc
					} else {
						return uc
					}
				})
			}	
				
		case 'ADD_REVIEW':
			return {
				...state,
				user_countries: state.user_countries.map(uc => {
					if (action.review.user_country_id === uc.id) {
						uc.review = action.review
						return uc
					} else {
						return uc
					}
				})
			}

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