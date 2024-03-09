import {pool} from '../config/config.js'

const getCarts = async()=>{
    const [cart] = await pool.query(`
    SELECT * FROM Cart
    `)
    return cart
}
const getCart = async(cartID)=>{
    const [item] = await pool.query(`
    SELECT * FROM Cart WHERE cartID = ?
    `,[cartID])
    return item 
}
const editQuan = async(cartID,quantity)=>{
    const [quantity] = await pool.query(`
    UPDATE Cart SET quantity = ?  WHERE (cartID = ?)
    `,[quantity,cartID])
    return getCarts(quantity)
}

const deleteCart = async(cartID)=>{
    const [cart] = await pool.query(`
    DELETE FROM Cart WHERE cartID = ?
    `,[cartID])
    return getCarts(cart)
}

export {getCarts,getCart,editQuan,deleteCart}