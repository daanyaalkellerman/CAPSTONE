import express from 'express'
import cartControl from '../controller/cart.js'


const router = express.Router()

router.route('/')
.get(cartControl.Cart)

router.route('/:prodID')
.get(cartControl.prodCart)
.post(cartControl.addProd)
.delete(cartControl.deleteFromCart)
.delete(cartControl.clearCart)

export default router