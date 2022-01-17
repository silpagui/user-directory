import React, { useState, useEffect } from "react";
import { UserCard } from "../UserCard/UserCard.component";
import "./HomePage.styles.css";

export function HomePage() {
	const [users, setUsers] = useState([]);
	useEffect(
		function updateUsersData() {
			fetch("https://jsonplaceholder.typicode.com/users")
				.then((response) => {
					return response.json();
				})
				.then((users) => {
					setUsers(users);
				});
		},
		[setUsers]
	);
	return (
		<div className="app-container">
			{users.map((user) => {
				return (
					<UserCard
						key={user.id}
						name={user.name}
						username={user.username}
						website={user.website}
						id={user.id}
					/>
				);
			})}
		</div>
	);
}
