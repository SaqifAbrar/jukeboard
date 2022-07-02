import BoardCard from "../common/components/elements/boards/boardCard";
import React from "react";

const boards = [
	{ id: 1, name: "Memes", numSounds: 15, colour: "#3B55CE" },
	{ id: 2, name: "Notes", numSounds: 15, colour: "#FD7282" },
	{ id: 3, name: "Concert Sound FX", numSounds: 15, colour: "#7E6FD7" },
	{ id: 4, name: "Melodies", numSounds: 15, colour: "#FDBB63" },
];

export default function Boards() {
	return (
		<div className="board-container">
			<div className="boards-option">
				<button>New Board</button>
				<button>Change Colour</button>
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
