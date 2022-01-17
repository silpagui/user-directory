import React from "react";
import { HomePage } from "./components/HomePage/HomePage.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./reset.css";
import { UserDetails } from "./components/UserDetails/UserDetails.component";

export function App() {
	return (
		<BrowserRouter basename="/user-directory">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:userId" element={<UserDetails />} />
			</Routes>
		</BrowserRouter>
	);
}
