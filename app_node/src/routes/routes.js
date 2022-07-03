const express = require("express");
const router = express.Router();
const boardRouter = require("./boardsRoutes");

router.get("/", (req, res) => res.send({ message: "accessed api route" }));

router.use("/boards", boardRouter);
//router.use("/board");

module.exports = router;
