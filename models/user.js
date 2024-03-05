import {pool} from '../config/config.js'

const getUsers = async () => {
    const [result] = await pool.query(`
    SELECT * FROM Users`)
    return result;
}

const getUser = async()=>{
    const [result] = await pool.query(`
    SELECT * FROM Users WHERE userID = ?
    `,[userID])
    return result
}
const addUser = async(firstName,lastName,userUrl,userAge,emailAdd,userRole,userPass)=>{
    const [result] = await pool.query(`
    INSERT INTO Users (firstName,lastName,userUrl,userAge,emailAdd,userRole,userPass) VALUES (?,?,?,?,?,?,?)
    `,[firstName,lastName,userUrl,userAge,emailAdd,userRole,userPass])
    return result
}
const editUser = async(firstName,lastName,userUrl,userAge,emailAdd,userRole,userPass)=>{
    const [result] = await pool.query(`
    UPDATE Users SET firstName = ?,lastName = ?,userUrl = ?, userAge = ?,emailAdd = ?,userRole = ?, userPass = ? WHERE (userID = ?)
    `,[firstName,lastName,userUrl,userAge,emailAdd,userRole,userPass,userID])
    return result
}
const deleteUser = async(userID)=>{
    const [user] = await pool.query(`
    DELETE FROM Users 
    WHERE userID = ?
    `,[userID])
    return getUsers(user)
}

const loggingUser = async(emailAdd)=>{
    const [[{userPass}]] = await pool.query(`
        SELECT userPass FROM Users WHERE emailAdd = ?
    `,[emailAdd])
    return userPass
}

export{getUsers,getUser,addUser,editUser,deleteUser,loggingUser}