import { getUsers, getUser,editUser,deleteUser } from "../models/user.js";

export default { 
    getUsers: async (req,res)=>{
        try{
            res.send(await getUsers())
        }catch(e){
            res.status(404).json({
                status: 404,
                msg:'Cannot get users'
            })
        }
    },
    getUser:async (req,res)=>{
        try{
            res.send(await getUser(+req.params.userID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg: 'No user found'
            })
        }
    },
    addUser:async (req,res)=>{
        try{
         
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Unable to add a user'
            })
        }
    },
    editUser:async (req,res)=>{
        try{
            const [user] = await getUser(+req.params.userID)
            let {firstName,lastName,userUrl,userAge,emailAdd,userRole,userPass} = req.body
            firstName ? firstName=firstName: {firstName}= user
            lastName ? lastName=lastName: {lastName}=user
            userUrl ? userUrl=userUrl: {userUrl}=user
            userAge ? userAge=userAge: {userAge}=user
            emailAdd ? emailAdd=emailAdd: {emailAdd}=user
            userRole ? userRole=userRole: {userRole}=user
            userPass ? userPass=userPass: {userPass}=user
            await editUser(+req.params.userID,firstName,lastName,userUrl,userAge,emailAdd,userRole,userPass)
            res.json(await getUsers())
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Error when editing this user'
            })
        }
    },
    deleteUser:async (req,res)=>{
        try{
            res.send(await deleteUser(req.params.userID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Cannot delete a user at this moment'
            })
        }
    },
    loggingUser:async (req,res)=>{
       
    }
}