const express = require("express");
const router = express.Router();

const {
    getallproduct,
    getallproductStatic,
} = require("../controllers/products");

router.route("/").get(getallproduct);
router.route("/static").get(getallproductStatic);

module.exports = router;
