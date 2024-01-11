const express = require("express");

const router = express.Router();

/*
 controller/CRUD contains ItemClass which is responsible for
 executing mySql querys.
*/

const CRUD = require("../controller/CRUD");

router.get("/titles", CRUD.titles);

module.exports = router;
