import React from "react";
import { useParams } from "react-router-dom";

const audios = [
	{ id: 1, name: "A" },
	{ id: 2, name: "A" },
	{ id: 3, name: "A" },
	{ id: 4, name: "A" },
	{ id: 5, name: "A" },
	{ id: 6, name: "A" },
	{ id: 7, name: "A" },
	{ id: 8, name: "A" },
	{ id: 9, name: "A" },
	{ id: 10, name: "A" },
	{ id: 11, name: "A" },
	{ id: 12, name: "A" },
	{ id: 13, name: "A" },
	{ id: 14, name: "A" },
	{ id: 15, name: "A" },
];

export default function Board({ boardName }) {
	const { name } = useParams();
	return (
		<div>
			{name}
			<h1>{boardName}</h1>
			{audios.map((audio) => (
				<div id={audio.id}>{audio.name}</div>
			))}
		</div>
	);
}
