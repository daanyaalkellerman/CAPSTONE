import express from 'express'
import cartControl from '../controller/cart.js'


const router = express.Router()

router.route('/')
.get(cartControl.getCarts)

router.route('/:cartID')
.get(cartControl.getCart)
.patch(cartControl.editQuan)
.delete(cartControl.deleteCart)