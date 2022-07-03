const express = require("express");
const router = express.Router();
const boardRouter = require("./boardsRoutes");

router.use("/boards", boardRouter);
//router.use("/board");

module.exports = router;
