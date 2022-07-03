import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JukeCard from "../common/components/elements/boards/jukeCard";

const audios = [
	{ id: 1, soundName: "Vine Boom", fileName: "" },
	{ id: 2, soundName: "Goat Scream", fileName: "" },
	{ id: 3, soundName: "CEEDAY Scream", fileName: "" },
	{ id: 4, soundName: "Bruh", fileName: "" },
	{ id: 5, soundName: "PS2 Startup", fileName: "" },
	{ id: 6, soundName: "FBI Open Up", fileName: "" },
	{ id: 7, soundName: "Old Internet", fileName: "" },
	{ id: 8, soundName: "Kaching", fileName: "" },
	{ id: 9, soundName: "Curb Enthusiasm", fileName: "" },
	{ id: 10, soundName: "Anime Wow", fileName: "" },
	{ id: 11, soundName: "John Cena", fileName: "" },
	{ id: 12, soundName: "Elevator Music", fileName: "" },
	{ id: 13, soundName: "Laugh Track", fileName: "" },
	{ id: 14, soundName: "Mario Jump", fileName: "" },
	{ id: 15, soundName: "We'll be Right Back", fileName: "" },
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
					<JukeCard
						key={tunes.id}
						name={tunes.soundName}
						colour={randColor()}
					/>
				))}
			</div>
		</div>
	);
}
