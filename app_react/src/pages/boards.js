import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardCard from "../common/components/elements/boards/boardCard";

/*const boardz = [
	{ id: 1, name: "Memes", numSounds: 15, colour: "#3B55CE" },
	{ id: 2, name: "Notes", numSounds: 15, colour: "#FD7282" },
	{ id: 3, name: "Concert Sound FX", numSounds: 15, colour: "#7E6FD7" },
	{ id: 4, name: "Melodies", numSounds: 15, colour: "#FDBB63" },
];*/

const colourChange = () => {
	alert("Colour change coming soon!");
};

export default function Boards() {
	const [boards, setBoards] = useState([]);

	const createBoard = () => {
		axios.post("/api/boards").then((res) => {
			console.log(res.data);
			setBoards(res.data);
		});
	};

	useEffect(() => {
		axios.get("/api/boards").then((res) => {
			console.log(res.data);
			setBoards(res.data);
		});
	}, []);

	return (
		<div className="board-container">
			<div className="boards-option">
				<button onClick={() => createBoard()}>New Board</button>
				<button onClick={() => colourChange()}>Change Colour</button>
				<button>Delete Board</button>
			</div>
			<div className="boards-list">
				{boards.map((board) => (
					<BoardCard
						key={board.id}
						name={board.name}
						numSounds={board.numSounds}
						colour={board.colour}
					/>
				))}
			</div>
		</div>
	);
}
