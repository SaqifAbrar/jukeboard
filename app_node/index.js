const express = require("express");
const dotenv = require("dotenv");
const app = express();
const router = require("./src/routes/routes");

require("dotenv").config();
app.use(express.json());

// location routes
//app.use("/api", router);

const port = process.env.PORT || 5000;
app.listen(port, () =>
	console.log(`JukeBoard server is listening on port ${port}`),
);
