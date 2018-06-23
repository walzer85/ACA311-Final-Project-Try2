const express = require("express");
const router = express.Router();
const { list, show, create } = require( "../controllers/MusicianControllers");


router.get("/musicians", list);
router.get("/musicians/:_id", show);
router.post("/musicians", create);

module.exports = router;