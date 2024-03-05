import { addUser } from "../models/user.js";
import bcrypt from 'bcrypt'
const addUserHash = (req, res, next) => {
    const {firstName,lastName,userUrl,userAge,emailAdd,userRole,userPass} = req.body
    bcrypt.hash(userPass,10,async (err,hashPass)=>{
        if(err) throw err
        await addUser(firstName,lastName,userUrl,userAge,emailAdd,userRole,hashPass)
        res.send({
            msg: "New User Added ;)"
        });
        next();
    })
}

export default addUserHash