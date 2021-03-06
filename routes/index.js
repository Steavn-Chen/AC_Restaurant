const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
const list = require('./modules/list')
const sort = require('./modules/sort')
const users = require('./modules/users')
const auth = require('./modules/auth')
const { authenticator } = require('../middleware/auth')

router.use('/restaurants', authenticator, restaurants)
router.use('/search', authenticator, search)
router.use('/list', authenticator, list)
router.use('/sort', authenticator, sort)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

module.exports = router