const Router = require('express')
const dataController = require('../controllers/dataController')
const middleware = require('../checkRoleMiddleware')
const router = new Router()

router.post('/', dataController.create)
router.get('/',  dataController.getAll)
router.get('/order', dataController.getAll_orderBy)
router.get('/:id', dataController.getOne )
router.get('/qwe/:id', middleware('teacher'), dataController.getOne2 )


module.exports=router 