const express = require("express");
const { adminLogin } = require("./user.controller");

const router = express.Router();

router.post("/admin", adminLogin);

module.exports = router;
