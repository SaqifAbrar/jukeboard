const router = require("express").Router();

router.get("/", (req, res) => {
	res.send({ message: "homeResponse" });
});

module.exports = router;
