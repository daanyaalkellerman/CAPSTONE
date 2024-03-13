import jwt from 'jsonwebtoken'

const token = (req,res,next)=>{
let {cookie} = req.headers
let headerToken = cookie && cookie.split('=')[1]
        if(headerToken === null)res.sendStatus(401)
    jwt.verify(headerToken,process.env.SECRET_KEY,(err,user,admin)=>{
        req.user = user
        req.admin = admin
        next()
    })
}

export default token