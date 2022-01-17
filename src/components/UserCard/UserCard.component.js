import React from "react";
import { Button } from "../Button/Button.component";
import "./UserCard.styles.css";

export function UserCard(props) {
	const website = "https://" + props.website;
	return (
		<div className="user-card">
			<div className="user-card__image">{props.name[0]}</div>
			<h2 className="user-card__name">{props.name}</h2>
			<p className="user-card__username">{props.username}</p>
			<a href={website} className="user-card__website">
				{website}
			</a>
			<Button path={props.id} />
		</div>
	);
}
