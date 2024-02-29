const Router = require('express')
const router = new Router()
const dataRouter = require('./dataRoutes')
const authRouter = require('./authRoutes')

router.use('/auth', authRouter)
router.use('/data', dataRouter )


module.exports=router 