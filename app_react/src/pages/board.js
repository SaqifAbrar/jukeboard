import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JukeCard from "../common/components/elements/boards/jukeCard";

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

const colours = [
	"#FD7282",
	"#FDBB63",
	"#3B55CE",
	"#D7B0FF",
	"#A9FF75",
	"#FF93EE",
];

const randColor = () => {
	const i = Math.floor(Math.random() * colours.length);
	return colours[i];
};

export default function Board({ boardName }) {
	const { name } = useParams();
	const [tunes, setTunes] = useState([]);

	useEffect(() => {
		const tunesReceived = audios;
		console.log(tunesReceived);
		setTunes(tunesReceived);
	}, []);

	return (
		<div className="board-container">
			{console.log(tunes)}
			<h1>{name}</h1>
			<div className="juke-grid">
				{tunes.map((tunes) => (
					<JukeCard key={tunes.id} name={tunes.name} colour={randColor()} />
				))}
			</div>
		</div>
	);
}
