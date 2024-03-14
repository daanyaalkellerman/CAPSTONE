import jwt from 'jsonwebtoken'

const token = (req,res,next)=>{
let {cookie} = req.headers
let headerToken = cookie && cookie.split('=')[1]
        if(headerToken === null)res.sendStatus(401)
    jwt.verify(headerToken,process.env.SECRET_KEY,(err,user)=>{
        req.user = user
        next()
    })
}

export default token