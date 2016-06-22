import React from 'react'
import { Link } from 'react-router'

const User = ({ id, first_name, last_name, phone_number }) => (
	<li>
		<div className="card blue-grey">
			<div className="card-content white-text">
				<span className="card-title">{`${first_name} ${last_name}`}</span>
				<p>Phone Number: {`${phone_number}`}</p>
			</div>
			<div className="card-action">
				<Link to={`/users/${id}`}>Show</Link>
				<a onClick={() => deleteUser(id)}>Delete</a>
			</div>
		</div>
	</li>
)

export default User
