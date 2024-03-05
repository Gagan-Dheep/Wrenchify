const express = require('express');
const router = express.Router();

router.post('/logout', (req, res) => {
    console.log("yeah");
    res.cookie('newToken', '', { expires: new Date(0) });
    return  res.status(200).json({message: "logout succes"});
})

module.exports = router;
