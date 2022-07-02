import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="homeContainer">
			<h1>Upload memes, music and more.</h1>
			<h3>Create your own juke board!</h3>
			<button>
				<Link to="/boards">Go to boards!</Link>
			</button>
		</div>
	);
}
