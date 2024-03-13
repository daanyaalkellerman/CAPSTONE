import { loggingUser } from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import router from "../routes/login.js";


const loggedUser  = async (req,res,next)=>{
    const {emailAdd,userPass} = req.body
    const cryptedPassword = await loggingUser(emailAdd)
    bcrypt.compare(userPass,cryptedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            const tokenSign = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'6h'})
            res.cookie('jwt',tokenSign,{httpOnly:false})
            res.send({
                tokenSign:tokenSign,
                msg: 'Login Successful'
            })
            next()
        }else{
            res.send({path: '/login',
            msg: 'Incorrect Email or Password'})
            
        }

    })
}
export default loggedUser