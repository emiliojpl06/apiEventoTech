import express from 'express'
import routerCharla from './charla'
import routerExpositor from './expositor'

var router = express.Router()

router.use('/charlas',routerCharla)
router.use('/expositor',routerExpositor)

export default router;