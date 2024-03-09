import { getProducts,getProduct,addProduct,editProduct,deleteProduct } from "../models/product.js";

export default {
    getProducts: async (req,res)=>{
        try{
            res.send(await getProducts())
        }catch(err){
            res.status(404).json({
                status:404,
                msg:'Error when retrieving Products'
            })
        }
    },
    getProduct: async (req,res)=>{
        try{
            res.send(await getProduct(+req.params.prodID))
        }catch(err){
            res.status(404).json({
                status:404,
                msg:'Error when retrieving that product'
            })
        }
    },
    addProduct: async (req,res)=>{
        try{
            const {prodName,prodUrl,prodDes,category,quantity,price} = req.body
            await addProduct(prodName,prodUrl,prodDes,category,quantity,price)
            res.send({
                msg:'New product has been added'
            })
        }catch(err){
            res.status(404).json({
                status:404,
                msg:'Error when adding this product'
            })
        }
    },
    editProduct: async(req,res)=>{
        try{
            const [product] = await getProduct(+req.params.prodID)
            let {prodName,prodUrl,prodDes,category,quantity,price} = req.body
            prodName ? prodName=prodName: {prodName} = product
            prodUrl ? prodUrl=prodUrl: {prodUrl} = product
            prodDes ? prodDes=prodDes: {prodDes} = product
            category ? category=category: {category} = product
            quantity ? quantity=quantity: {quantity} = product
            price ? price=price: {price}= product
            await editProduct(+req.params.prodID,prodName,prodUrl,prodDes,category,quantity,price)
            res.json(await getProducts())
        }catch(err){
            res.status(404).json({
                status:404,
                msg: 'Error when editing this product'
            })
        }
    },
    deleteProduct: async(req,res)=>{
        try{
            res.send(await deleteProduct(+req.params.prodID))
        }catch(err){
            res.status(404).json({
                status:404,
                msg:'Error when deleting a product'
            })
        }
    }
}