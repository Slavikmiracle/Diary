const Router = require('express')
const router = new Router()
const authController = require('../controllers/authController')
const authMiddleware = require('../authMiddleware')

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.get('/auth', authMiddleware, authController.check)

module.exports = router



