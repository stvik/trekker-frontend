import React from 'react'
import { BrowseRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Dropdown, Form } from 'semantic-ui-react'


class Homepage extends React.Component {


	constructor() {
		super()
		this.state = {
			searchValue: '',
		}
	}

	getCountryOptions(countries) {
		return countries.map(country => ({key: country.country_code.toLowerCase(),
										 value: country.country_code.toLowerCase(), 
										 text: country.name}))
	}

	handleSubmit = (countries) => {
		const selectedCountry = countries.find(country => country.name === this.state.searchValue)
		this.props.history.push(`/countries/${selectedCountry.id}`)
	}



	render() {

		const countries = this.props.countries
		const countryOptions = (countries.length ? this.getCountryOptions(countries) : null)
		return (
			<div>
				<Form onSubmit={() => this.handleSubmit(countries)}>
					<Dropdown
					placeholder='Where do you want to go?'
					fluid
					search
					selection
					options={countryOptions}
					onSelect={(e) => this.setState({searchValue: e.currentTarget.innerText}) }
					/>
		  			<Button type='submit' >Search</Button>

	  			</Form>

			</div>
			)
	}
}

const mapStateToProps = (state) => ({countries: state.countries})

export default connect(mapStateToProps)(Homepage)

