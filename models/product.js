import {pool} from '../config/config.js'

const getProducts = async()=>{
    const [products] = await pool.query(`
SELECT * FROM Products
`)
return products
}

const getProduct = async(prodID)=>{
    const [product] = await pool.query(`
  SELECT * FROM Products WHERE prodID = ?  
    `,[prodID])
    return product
}

const addProduct = async(prodName,prodUrl,prodDes,category,quantity,price)=>{
    const [product] = await pool.query(`
    INSERT INTO Products (prodName,prodUrl,prodDes,category,quantity,price) VALUES (?,?,?,?,?,?)
    `,[prodName,prodUrl,prodDes,category,quantity,price])
    return getProduct(product.insertId)
}

const editProduct = async(prodID,prodName,prodUrl,prodDes,category,quantity,price)=>{
    const [product] = await pool.query(`
    UPDATE Products SET prodName = ?,prodUrl = ?,prodDes = ?,category = ?,quantity = ?,price = ? WHERE (prodID = ?)
    `,[prodName,prodUrl,prodDes,category,quantity,price,prodID])
    return getProducts(product)
}
const deleteProduct = async(prodID)=>{
    const [product] = await pool.query(`
    DELETE FROM Products WHERE prodID = ?
    `,[prodID])
    return getProducts(product)
}
export{getProducts,getProduct,addProduct,editProduct,deleteProduct}
