const express = require("express");
const dotenv = require("dotenv");
const app = express();
const apiRoutes = require("./src/routes/routes");

//require("dotenv").config();
//app.use(express.json());

// location routes
app.use("/api", apiRoutes);

const port = process.env.PORT || 6000;
app.listen(port, () =>
	console.log(`JukeBoard server is listening on port ${port}`),
);
