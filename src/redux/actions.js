import swal from 'sweetalert'

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

export function postUser(configObj, visitedCountries) {
	return(dispatch) => {
		fetch('http://localhost:3000/users', configObj)
		.then(resp => resp.json())
		.then(user => {
			


			dispatch({type: 'SET_CURRENT_USER', user})
		})
	}
}

export function signInUser(account) {

	return(dispatch) => {
		fetch(`http://localhost:3000/users/login?username=${account.username}&password=${account.password}`)
		.then(resp => resp.json())
		.then(user => dispatch({type: 'SET_CURRENT_USER' ,user}))
	}
}

export function addToList(configObj) {
	return(dispatch) => {
		fetch(`http://localhost:3000/user_countries`, configObj)
		.then(resp => resp.json())
		.then(userCountry => {
			if (userCountry.error) {
			swal({
			text: "Something went wrong...",
			icon:"error",
			})
			}
			else {
			dispatch({type: 'ADD_USER_COUNTRY', userCountry})
			swal({
			text: "Country added!",
			icon:"success",
			})
			}
		})
		
	}
}

export function setSelectedCountryToNull() {
	return(dispatch) => {
	dispatch({type: 'SET_SELECTED_COUNTRY_TO_NULL'})
	}	
}

export function deleteListItem(id) {
	return(dispatch) =>{
		fetch(`http://localhost:3000/user_countries/${id}`, {method: 'DELETE'})
		.then(resp => resp.json())
		.then(userCountry => dispatch({type: 'REMOVE_USER_COUNTRY', userCountry}))
	}
}

export function updateUser(configObj, id) {
	return(dispatch) => {
		fetch(`http://localhost:3000/users/${id}`, configObj)
		.then(resp => resp.json())
		.then(user => {
			if (user.error) {
				swal({
				text: "Something went wrong...",
				icon:"error",
			})
			} else {
				dispatch({type: 'SET_CURRENT_USER', user})
				swal({
				text: "Profile updated",
				icon:"success",
				})
			}
		})
	}
}

export function createReview(configObj) {
	return(dispatch) => {
		fetch('http://localhost:3000/reviews', configObj)
		.then(resp => resp.json())
		.then(review => {
			console.log(review)
			if (review.error) {
				swal({
				text: "Something went wrong...",
				icon:"error",
			})
			} else {
				swal({
				text: "Review created",
				icon:"success",
				})
			}
		})
	}
}

export function setCurrentUserToNull() {
	return(dispatch) => {
	dispatch({type: 'SET_CURRENT_USER_TO_NULL'})
	}	
}













