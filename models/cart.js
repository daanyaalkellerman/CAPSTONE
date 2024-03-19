import {pool} from '../config/config.js'

const getCarts = async(userID)=>{
    const [cart] = await pool.query(`
    SELECT * FROM Cart WHERE userID = ?
    `,[userID])
    return cart
}
const getItem = async(cartID)=>{
    const [item] = await pool.query(`
    SELECT * FROM Cart WHERE cartID = ?
    `,[cartID])
    return item 
}
const addProd = async(quantity)=>{
    const [item] = await pool.query(`
    INSERT INTO Cart (quantity) VALUES (?)
    `,[quantity])
    return item
}
const editQuan = async(cartID,quantity)=>{
    const [quan] = await pool.query(`
    UPDATE Cart SET quantity = ?  WHERE (cartID = ?)
    `,[quantity,cartID])
    return getCarts(quan)
}

const deleteCart = async(cartID)=>{
    const [cart] = await pool.query(`
    DELETE FROM Cart WHERE cartID = ?
    `,[cartID])
    return getCarts(cart)
}
const clearCart = async(userID)=>{
    const [clear] = await pool.query(`
    DELETE FROM Cart WHERE userID = ?
    `,[userID])
    return getCarts(clear)
}
const displayCart = async(userID)=>{
    const [cart] = await pool.query(`
    SELECT DISTINCT  prodName, price,prodUrl, category, COUNT(cartID) as quantity
    FROM Cart
    INNER JOIN Products ON Cart.prodID = Products.prodID
    WHERE Cart.userID = ?
    GROUP BY prodName;
    `,[userID])
    return cart
}
export {getCarts,getItem,editQuan,deleteCart, addProd ,displayCart ,clearCart}