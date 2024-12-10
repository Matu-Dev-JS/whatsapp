import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import UserRepository from "../repositories/user.repository.js"
import ENVIROMENT from "../config/enviroment.config.js"

const login = async (req, res) =>{
    try{
        const {username, password} = req.body
        const user = await UserRepository.findUserByUsername(username)

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!user){
            return res.status(401).json({
                ok: false,
                status: 401,
                message: 'User not found'
            })
        }
        else if(!isPasswordValid){
            return res.status(401).json({
                ok: false,
                status: 401,
                message: 'Invalid password'
            })
        }
        const token = jwt.sign({username, id: user._id}, ENVIROMENT.SECRET_KEY)
        return res.status(200).json({
            ok: true,
            status: 200,
            message: 'Login successful',
            data: {
                access_token: token
            }
        })

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

const register = async (req, res) =>{
    try{
        const {username, password} = req.body
        //Aca se valida

        const hashed_password = await bcrypt.hash(password, 10)
        const user = await UserRepository.createUser({
            username, 
            password: hashed_password
        })

        return res.status(201).json({
            ok: true,
            status: 201,
            message: 'User created',
            data: {
                user: {
                    username: user.username,
                    id: user._id
                }
            }
        })
        
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

export {login, register}