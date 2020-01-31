export function fetchCountries() {
	return (dispatch) => {
		fetch('http://localhost:3000/countries')
		.then(resp => resp.json())
		.then(countries => dispatch({type: 'ADD_COUNTRIES', countries}))
	}
}

export function fetchCountry(id) {
	return(dispatch) => {
		fetch(`http://localhost:3000/countries/${id}`)
		.then(resp => resp.json())
		.then(country => dispatch({type: 'GET_SELECTED_COUNTRY', country}))
	}
}

export function postUser(configObj) {
	return(dispatch) => {
		fetch('http://localhost:3000/users', configObj)
		.then(resp => resp.json())
		.then(user => dispatch({type: 'SET_CURRENT_USER', user}))
	}
}

export function signInUser(account) {

	return(dispatch) => {
		fetch(`http://localhost:3000/users/login?username=${account.username}&password=${account.password}`)
		.then(resp => resp.json())
		.then(user => dispatch({type: 'SET_CURRENT_USER' ,user}))
	}
}