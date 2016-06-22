import React from 'react'
import $ from 'jquery'
import { BASE_URL } from '../constants'

class AddUser extends React.Component {
	handleSubmit(e) {
		e.preventDefault()
		let first_name = this.refs.first_name.value
		let last_name = this.refs.last_name.value
		let phone_number = this.phone_number.value
		$.ajax({
			url: `${BASE_URL}/products`,
			type: 'POST',
			data: { user: { first_name, last_name, phone_number } }
		}).done( user => {
			this.props.addUser(user)
			this.refs.addForm.reset()
		})
	}

	render() {
		return (
			<div className="col m4">
				<h4 className="center">Add User</h4>
				<form ref="addForm" onSubmit={this.handleSubmit.bind(this)}>
					<input placeholder="First Name" ref="first_name" required={true} />
					<input placeholder="Last Name" ref="last_name" required={true} />
					<input placeholder="Phone Number" ref="phone_number" />
					<button className="btn" type="submit">Add</button>
				</form>
			</div>
		)
	}
}

export default AddUser
