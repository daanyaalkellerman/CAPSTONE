import express from 'express'
import loginControl from '../controller/user.js'

const router = express.Router()

router.route('/')
.post(loginControl.loggingUser)

export default router