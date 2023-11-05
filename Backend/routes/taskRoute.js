const express = require('express')

const router = express.Router()

const { createGroup,getAllGroups,getSingleRoom} = require("../controllers/dbController")

router.post('/',createGroup)
router.get('/all',getAllGroups)
router.get('/:id',getSingleRoom)

module.exports = router;