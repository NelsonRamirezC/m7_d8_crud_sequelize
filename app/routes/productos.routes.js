const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("ruta productos");
});

module.exports = router;