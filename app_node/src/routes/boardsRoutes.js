const router = require("express").Router();
const boardsCollection = require("../model/boardsCollection.json");

router.get("/", (req, res) => {
	res.send(boardsCollection);
});

router.post("/", (req, res) => {
	res.send({ message: "created new board" });
});

router.get("/:id", (req, res) => {
	res.send({ message: "getting jukeboard" });
});

router.delete("/:id", (req, res) => {
	res.send({ message: "deleted board" });
});

module.exports = router;
