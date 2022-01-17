import React from "react";
import { HomePage } from "./components/HomePage/HomePage.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./reset.css";
import { UserDetails } from "./components/UserDetails/UserDetails.component";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/:userId" element={<UserDetails />} />
			</Routes>
		</BrowserRouter>
	);
}
