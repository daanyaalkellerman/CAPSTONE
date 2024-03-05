import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.js'
import prodRouter from './routes/product.js'
import loginRouter from './routes/login.js'
import  loggedUser from './middleware/loggingUser.js'
import token from './middleware/token.js'

config()
const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.static('views'))
app.use('/login',loggedUser,token,loginRouter)
app.use('/users',userRouter)
app.use('/products',prodRouter)

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
})