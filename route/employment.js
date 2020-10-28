const express = require("express");
const {getUsers,createEmp,deleteEmp} = require("../controller/employment");
const router = express.Router();

router.get('/getAll',getUsers);

router.post('/addEmp',createEmp)

router.delete('/delete/:id',deleteEmp)


module.exports = router;