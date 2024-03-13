import express from 'express'
import loginControl from '../controller/user.js'
import loggedUser from '../middleware/loggingUser.js'
import token from '../middleware/token.js'

const router = express.Router()

router.route('/',loggedUser,token)
.post(loginControl.loggingUser)

export default router