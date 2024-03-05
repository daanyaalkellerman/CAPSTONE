import express from 'express';
import userControl from '../controller/user.js'
import cryptedPassword from '../middleware/adduser.js'
const router = express.Router()

router.route('/')
.get(userControl.getUsers)
.post(cryptedPassword,userControl.addUser)

router.route('/:userID')
.get(userControl.getUser)
.patch(userControl.editUser)
.delete(userControl.deleteUser)

export default router