import express from 'express'
import cartControl from '../controller/cart.js'


const router = express.Router()

router.route('/')
.get(cartControl.displayCart)
.post(cartControl.addProd)

router.route('/:userID')
.get(cartControl.getItem)
.patch(cartControl.editQuan)
.delete(cartControl.deleteFromCart)
.delete(cartControl.clearCart)

export default router