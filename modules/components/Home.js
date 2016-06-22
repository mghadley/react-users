import React from 'react'
import $ from 'jquery'
import { BASE_URL } from '../constants'
import Users from './Users'
import AddUser from './AddUser'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = { users: [] }
	}

	componentWillMount() {
		$.ajax({ 
			url: `${BASE_URL}/users`,
			type: 'GET'
		}).done( users => {
			this.setState({ users })
		})
	}

	addUser(user) {
		this.setState({ users: [ { ...user }, ...this.state.users ] })
	}

	deleteUser(user) {
		event.PrevenDefault
		$.ajax({
			url: `${BASE_URL}/users/${id}`
			type: 'DELETE',
		}).done( () => {
			let users = this.state.users
			let index = users.findIndex( product => product.id === id)
			this.setState({
				products: [
					...products.slice(0, index),
					...products.slice(index + 1, products.length)
				]
			})
		})
	}

	render() {
		return (
			<div className = "row">
				<Users users={this.state.users} deleteUser={this.deleteUser.bind(this)/>
				<AddUser addUser={this.addUser.bind(this)}/>
			</div>
		)
	}
}

export default Home
