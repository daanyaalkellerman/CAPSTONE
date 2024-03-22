import {pool} from '../config/config.js'

const getCart = async()=>{
    const [cart] = await pool.query(`
    SELECT * FROM Cart
    `)
    return cart
}
const clearCart = async(userID)=>{
    const [clear] = await pool.query(`
    DELETE FROM Cart WHERE userID = ?
    `,[userID])
    return getCart(clear)
}
const addProd = async(prodID, userID)=>{
    const [item] = await pool.query(`
    SELECT * FROM Cart WHERE prodID = ? AND userID = ?
    `,[prodID,userID]);
    if (item.length > 0){
        const newQuan = item[0].quantity + 1;

        await pool.query(`
        UPDATE Cart
        SET quantity = ?
        WHERE prodID = ? AND userID = ?
        `,[newQuan, prodID,userID])
    }else{
        await pool.query(`
        INSERT INTO Cart (prodID,userID,quantity) VALUES (?,?,?)
        `,[prodID,userID]);
    }

}
const fill = async(prodID,userID) =>{
    await addCart(prodID,userID)
}
const deleteProd = async(prodID, userID)=>{
    const [item] = await pool.query(`
    SELECT * FROM Cart WHERE prodID = ? AND userID = ?
    `,[prodID,userID]);
    if (item.length > 0){
        const newQuan = item[0].quantity - 1;
        if(newQuan <= 0){
            await pool.query(`
            DELETE FROM Cart
            WHERE prodID = ? AND userID = ?
            `,[prodID,userID])
        }else{

            await pool.query(`
            UPDATE Cart SET quantity = ? WHERE prodID = ?, userID = ?
            `,[newQuan,prodID,userID])
        }
    }
}
export {getCart,fill,addProd,deleteProd ,displayMyCart ,clearCart}