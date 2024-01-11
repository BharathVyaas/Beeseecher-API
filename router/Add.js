const CRUD = require("../controller/CRUD");

const express = require("express");

const router = express.Router();

router.post("/Add", CRUD.Add);

module.exports = router;
