import React from "react";
import "./App.styles.css";
import "./reset.css";

export function App() {
	return (
		<div className="app-container">
			<div className="user-card">
				<div className="user-card__image">P</div>
				<h2 className="user-card__name">Patricia Lebsack</h2>
				<p className="user-card__username">@karianne</p>
				<a href="https://kale.biz" className="user-card__website">
					https://kale.biz
				</a>
				<button className="button">More Details</button>
			</div>
		</div>
	);
}
