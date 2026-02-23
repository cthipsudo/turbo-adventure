const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.isAdmin) {
        next();
    }
    res.send("Sorry! not an admin")
});

router.get('/top', (req, res) => {
    res.send('Top Secret HUSH HUHS!');
});

router.get('/deleteeverything', (req, res) => {
    res.send("'I've been deleted...");
});

module.exports = router;
