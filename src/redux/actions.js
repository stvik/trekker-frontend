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