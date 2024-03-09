import {pool} from '../config/config.js'

const getRevs = async ()=>{
    const [results] = await pool.query(`
    SELECT * FROM reviews`)
    return results
}
const getRev = async (revID)=>{
    const [results] = await pool.query(`
    SELECT * FROM reviews WHERE revID = ?
    `,[revID])
    return results
}

const addRev = async (revHead,revDes)=>{
    const [rev] = await pool.query(`
    INSERT INTO reviews (revHead,revDes) VALUES (?,?)
    `,[revHead,revDes])
    return rev
}
const editRev = async (revID,revHead,revDes)=>{
    const [patchRev] = await pool.query(`
    UPDATE reviews SET revHead = ?,revDes = ? WHERE (revID = ?)   
    `,[revHead,revDes,revID])
    return getRevs(patchRev)
}

const deleteRev = async (revID)=>{
    const [delRev] = await pool.query(`
    DELETE FROM reviews
    WHERE revID = ?
    `,[revID])
    return getRevs(delRev)
}

export {getRevs,getRev,addRev,editRev,deleteRev}