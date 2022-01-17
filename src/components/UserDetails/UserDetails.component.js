import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.styles.css";

export function UserDetails() {
	const params = useParams();
	const url = "https://jsonplaceholder.typicode.com/users/" + params.userId;

	const [userDetails, setUserDetails] = useState({});

	useEffect(
		function updateUsersDetails() {
			fetch(url)
				.then((response) => {
					return response.json();
				})
				.then((userDetails) => {
					setUserDetails(userDetails);
				});
		},
		[setUserDetails]
	);
	return (
		<div className="details">
			<h2>User Information</h2>
			<p>Name: {userDetails.name}</p>
			<p>Username: {userDetails.username}</p>
			<p>Email: {userDetails.email}</p>
			<p>Phone: {userDetails.phone}</p>
			<p>Company: {userDetails.company && userDetails.company.name}</p>
			<p>Website: {userDetails.website}</p>
			{userDetails.address && (
				<>
					<h3>Address:</h3>
					<ul>
						<li>- Street: {userDetails.address.street}</li>
						<li>- Suite: {userDetails.address.suite}</li>
						<li>- City: {userDetails.address.city}</li>
						<li>- ZipCode: {userDetails.address.zipcode}</li>
					</ul>
				</>
			)}
		</div>
	);
}
