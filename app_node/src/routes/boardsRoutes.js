const router = require("express").Router();
const fs = require("fs");
//var ms = require("mediaserver");
var boardsCollection = require("../model/boardsCollection.json");

router.get("/", (req, res) => {
	res.send(boardsCollection);
});

router.post("/", (req, res) => {
	const lastId = boardsCollection.at(-1).id + 1;
	const newBoard = {
		id: lastId,
		name: "test",
		numSounds: 0,
		colour: "#000000",
	};
	boardsCollection.push(newBoard);
	const boardsString = JSON.stringify(boardsCollection);
	fs.writeFileSync("src/model/boardsCollection.json", boardsString);
	res.send(boardsCollection);
});

router.get("/:id", (req, res) => {
	if (res.query) {
		//ms.pipe(req, res, res.query.fileName);
	}
	res.send({ message: "getting jukeboard" });
});

router.delete("/:id", (req, res) => {
	res.send({ message: "deleted board" });
});

module.exports = router;
