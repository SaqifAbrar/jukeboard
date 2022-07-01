import BoardCard from "../common/components/elements/boards/boardCard";
import React from "react";

const boards = [
	{ id: 1, name: "Memes", numSounds: 15 },
	{ id: 2, name: "Notes", numSounds: 15 },
	{ id: 3, name: "Concert Sound FX", numSounds: 15 },
	{ id: 4, name: "Melodies", numSounds: 15 },
];

export default function Boards() {
	return (
		<div className="board-container">
			<div className="boards-option">
				<button>New Board</button>
				<button>Delete Board</button>
			</div>
			<div className="boards-list">
				{boards.map((board) => (
					<BoardCard
						id={board.id}
						name={board.name}
						numSounds={board.numSounds}
					/>
				))}
			</div>
		</div>
	);
}
