import { getCarts,displayCart,editQuan,deleteCart,getItem,addProd ,clearCart } from "../models/cart.js";

export default {
    displayCart: async (req,res)=>{
        try{
            res.send(await displayCart(+req.params.userID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg: 'Error when fetching cart'
            })
        }
    },
    getItem: async (req,res)=>{
        try{
            res.send(await getItem(+req.params.cartID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Error when getting a specific item'
            })
        }

    },
    addProd: async (req,res)=>{
        try{
            const {quantity} = req.body
            await addProd(quantity)
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
    editQuan: async (req,res)=>{
        try{
            const quan = await getItem(+req.params.cartID)
            let {quantity} = req.body
            quantity ? quantity=quantity:  {quantity} = quan
            await editQuan(+req.params.body,quantity)
            res.json(await getCarts())
        }catch(e){
            res.status(404).json({
                status:404,
                msg: 'Cannot edit cart'
            })
        }
    },
    deleteFromCart: async (req,res)=>{
        try{
            res.send(await deleteCart(+req.params.cartID))
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
    
