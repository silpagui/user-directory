import React from "react";
import { Button } from "../Button/Button.component";
import "./UserCard.styles.css";

export function UserCard() {
	return (
		<div className="user-card">
			<div className="user-card__image">P</div>
			<h2 className="user-card__name">Patricia Lebsack</h2>
			<p className="user-card__username">@karianne</p>
			<a href="https://kale.biz" className="user-card__website">
				https://kale.biz
			</a>
			<Button />
		</div>
	);
}
