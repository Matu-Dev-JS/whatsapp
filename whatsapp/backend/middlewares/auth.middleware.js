import jwt from "jsonwebtoken"
import ENVIROMENT from "../config/enviroment.config.js"

const authMiddleware = (req, res, next) =>{
    try{
        const auth_header = req.headers.authorization
        if(!auth_header || !auth_header.startsWith('Bearer ')){
            return res.status(401).json({
                ok: false,
                status: 401,
                message: 'Unauthorized'
            })
        }
        const auth_token = auth_header.split(' ')[1]
        const decoded_token = jwt.verify(auth_token, ENVIROMENT.SECRET_KEY)
        req.user = decoded_token
        return next()
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            ok: false,
            status: 500,
            message: 'Internal server error'
        })
    }
}

export default authMiddleware