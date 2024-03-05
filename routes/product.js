import express from 'express'
import productControl from '../controller/product.js'

const router = express.Router()

router.route('/')
.get(productControl.getProducts)
.post(productControl.addProduct)

router.route('/:prodID')
.get(productControl.getProduct)
.patch(productControl.editProduct)
.delete(productControl.deleteProduct)

export default router       