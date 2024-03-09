import {getRevs,getRev,addRev,editRev,deleteRev} from '../models/review.js'

export default {
    getRevs: async (req,res)=>{
        try{
            res.send(await getRevs())
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Error when retrieving  reviews'
            })
        }
    },
    getRev: async (req,res)=>{
        try{
            res.send(await getRev(+req.params.revID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg: 'Review not found'
            })
        }
    },
    addRev: async (req,res)=>{
        try{
            const {revHead,revDes} = req.body
            await addRev(revHead,revDes)
            res.send({
                msg:'Your Review has been sent'
            })

        }catch(e){
            console.log(addRev())
            res.status(404).json({
                status:404,
                msg:'Error when sending review'
            })
        }
    },
    editRev: async (req,res)=>{
        try{
            const review = await getRev(+req.params.revID)
            let {revHead,revDes} = req.body
            revHead ? revHead=revHead: {revHead} = review
            revDes ? revDes=revDes: {revDes} = review
            await editRev(+req.params.revID,revHead,revDes)
            res.json(await getRevs())
        }catch(e){
        
            res.status(404).json({
                status:404,
                msg: 'Error when editing review'
            })
        }
    },
    deleteRev: async (req,res)=>{
        try{
            res.send(await deleteRev(+req.params.revID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Error when deleting review'
            })
        }
    }
}