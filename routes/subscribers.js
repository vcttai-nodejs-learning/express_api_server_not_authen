const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello NodeJS API!!!");
});

router.get('/:id', (req, res) => {

})

router.post('/', (req, res) => {

});

router.patch('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;