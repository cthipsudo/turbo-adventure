const express = require('express');
const router = express.Router();
//const app = express();

router.get('/', (req, res) => {
    res.send('All shelters');
})

router.post('/', (req, res) => {
    res.send('Creating a shelter');
})

router.get('/:id', (req, res) => {
    res.send('Viewing One Shelter');
})

router.get('/:id/edit', (req, res) => {
    res.send('Editting the specific shelter');
})


module.exports = router;
