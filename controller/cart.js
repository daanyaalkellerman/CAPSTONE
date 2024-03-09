import { getCarts,getCart,editQuan,deleteCart } from "../models/cart";

export default {
    getCarts: async (req,res)=>{
        try{
            res.send(await getCarts())
        }catch(e){
            res.status(404).json({
                status:404,
                msg: 'Error when fetching cart'
            })
        }
    },
    getCart: async (req,res)=>{
        try{
            res.send(await getCart(+req.params.cartID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Error when getting a specific item'
            })
        }

    },
    editQuan: async (req,res)=>{
        try{
            const quan = await getCart(+req.params.cartID)
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
    deleteCart: async (req,res)=>{
        try{
            res.send(await deleteCart(+req.params.cartID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Unable to delete'  
             })
        }
    }
}
    
