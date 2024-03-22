import { getCart,deleteProd,addProd ,clearCart } from "../models/cart.js";

export default {
    Cart: async (req,res)=>{
        try{
            res.send(await getCart())
        }catch(e){
            res.status(404).json({
                status:404,
                msg: 'Error when fetching cart'
            })
        }
    },
    prodCart: async (req,res)=>{
        try{
            res.send(await addProd(+req.params.prodID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Error when getting a specific item'
            })
        }

    },
    addProd: async (req,res)=>{
        try{
            let {quantity} = req.body
           const [prod] = await getProduct(+req.params.prodID)
           let {userID} = req.query
           await fill(+req.params.prodID, userID, quantity)
            res.send(await addProd(+req.params.prodID))
        }catch(err){
            res.status(404).json({
                status:404,
                msg:'Error when adding this product'
            })
        }
    },
    deleteFromCart: async (req,res)=>{
        try{
            let {userID} = req.query
            await deleteProd(+req.params.prodID,userID)
            res.send(await getCart())
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Unable to delete'  
             })
        }
    },
    clearCart: async(req,res)=>{
        try{
            res.send(await clearCart(+req.params.userID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Unable to delete'
            })
        }
    }

}
    
