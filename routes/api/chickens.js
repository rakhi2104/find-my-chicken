const express = require('express');
const router = express.Router();

// chicken module
const Chicken = require('../../models/ip');

// @route POST api/chicken
// @desc New Chicken hit
// @access Public


router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

router.get('/', (req, res) => {
    res.json({
        "ip": req.ip,
        "language": req.headers['accept-language'],
        "software": req.headers['user-agent'],
    })
    // console.log(req);
})

module.exports = router;