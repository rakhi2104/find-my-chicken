const express = require('express');
const router = express.Router();
const axios = require('axios');

// chicken module
const Chicken = require('../../models/ip');

// @route POST api/chicken
// @desc New Chicken hit
// @access Public
router.post('/', (req, res) => {
    const newChicken = new Chicken({
        ip: "127.0.0.1",
        location: {
            lat: "83.22",
            long: "20.32"
        },
        timestamp: Date.now
    });

    newChicken.save().then(chick => {
        console.log(chick);
    });
});

router.get('/' , async (req, res) => {
    const { data } = await axios.get(`https://ipapi.co/json`);
    
    res.json({
        ...data,
        "language": req.headers['accept-language'], 
        "software": req.headers['user-agent']
    })
})

module.exports = router;