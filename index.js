import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.js'
import prodRouter from './routes/product.js'
import loginRouter from './routes/login.js'
import revRouter from './routes/reviews.js'
import cartRouter from './routes/cart.js'
import loggedUser from './middleware/loggingUser.js'
import token from './middleware/token.js'

config()
const PORT = process.env.PORT
const app = express()

app.use(cors(
    {
        origin:'http://localhost:8080',
        credentials:true
    }
))
app.use(express.json())
app.use(cookieParser())
app.use(express.static('views'))
app.use('/login',token,loggedUser,loginRouter)
app.use('/reviews',revRouter)
app.use('/users',userRouter)
app.use('/products',prodRouter)
app.use('/cart',cartRouter)

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
})