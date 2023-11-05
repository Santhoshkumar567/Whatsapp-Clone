const express = require('express')

const router = express.Router()

const {createMessage,getRoomMessages} = require("../controllers/dbMsgControllers")

router.post('/room/:roomId',createMessage)

router.get('/room/:roomId', getRoomMessages);
module.exports = router;