const express = require("express");
const router = express.Router();
const { list, show, create } = require( "../controllers/RequestControllers");


router.get("/requests", list);
router.get("/requests/:_id", show);
router.post("/requests", create);

module.exports = router;