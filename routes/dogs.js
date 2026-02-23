const express = require('express');
const router = express.Router();
//const app = express();

router.get('/', (req, res) => {
    res.send('All Dogs');
})

router.post('/', (req, res) => {
    res.send('Creating a dog');
})

router.get('/:id', (req, res) => {
    res.send('Viewing ne Dog');
})

router.get('/:id/edit', (req, res) => {
    res.send('Editting the specific dog');
})


module.exports = router;
