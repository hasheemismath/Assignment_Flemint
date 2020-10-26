const express = require("express");
const {getUsers,createEmp} = require("../controller/employment");
const router = express.Router();

router.get('/getAll',getUsers);

router.post('/addEmp',createEmp)


module.exports = router;