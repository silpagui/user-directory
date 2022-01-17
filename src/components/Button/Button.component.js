import React from "react";
import "./Button.styles.css";

import { Link } from "react-router-dom";

export function Button(props) {
	return (
		<Link to={"/" + props.path} className="button">
			More Details
		</Link>
	);
}
