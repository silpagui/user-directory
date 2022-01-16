import React from "react";
import { UserCard } from "../UserCard/UserCard.component";
import "./HomePage.styles.css";

export function HomePage() {
	return (
		<div className="app-container">
			<UserCard />
		</div>
	);
}
