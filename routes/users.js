const express = require('express');

const router = express.Router();

const {addUser} = require('../controllers/user');

router.get('/', (req, res)=>{
    return res.send("Hello beta!");
})

router.post('/', async(req, res)=>{
    const body = req.body;
    addUser(req, res);
});

module.exports = router;