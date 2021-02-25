import { User } from '../db.js'
import bcrypt from 'bcryptjs'
import { check, validationResult } from 'express-validator'
import moment from 'moment'
import jwt from 'jwt-simple'

export const validationRegister = [
    check("username","Agrega un nombre de usuario").not().isEmpty(),
    check("password","La contraseña es obligatoria").not().isEmpty(),
    check("email","El email el obligatorio").isEmail()
];
const createToken = ({ id,username,email })=>{
    
    const payload = {
        id,
        username,
        email,
        createAt:moment().unix(),
        expireAt:moment().add(5,'minutes').unix()
    }
    return jwt.encode(payload,process.env.JWT_SECRET_KEY)
};
export default {
    Register: async ( req,res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(412).json({
                status:412,
                errors:errors.errors
            })
        }
        req.body.password = bcrypt.hashSync(req.body.password,10)
        const result = await User.create(req.body)
        res.json({
            status:200,
            data:result
        })
    },
    Login:async(req,res)=>{
        if(!req.body.email || !req.body.email){
            return res.status(400).json({
                status:400,
                message:"The 'email' and 'password' are requireds"
            })
        }
        const user = await User.findOne({ where : { email : req.body.email } })
        if (user){
            const equals = bcrypt.compareSync(req.body.password,user.password)
            if(equals){
                res.json({
                    status:200,
                    message:"Logged successfully",
                    token: createToken(user)
                })
            }else{
                res.status(500).json({
                    status:500,
                    message:"Password incorrect"
                })    
            }
        }else{
            res.status(500).json({
                status:500,
                message:"The email is not exist"
            })
        }
    }
}