export function fetchCountries() {
	return (dispatch) => {
		fetch('http://localhost:3000/countries')
		.then(resp => resp.json())
		.then(countries => dispatch({type: 'ADD_COUNTRIES', countries}))
	}
}