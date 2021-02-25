import moment from 'moment'
import jwt from 'jwt-simple'

const checkToken = (req,res,next)=>{
    if(!req.headers["authorization"]){
        return res.status(400).json({
            status:400,
            message:"Add the header od 'Authorization' with Bearer"
        })
    }
    let payload = {};
    const [type,token ] = req.headers["authorization"].split(" ")
    try{
        payload = jwt.decode(token,process.env.JWT_SECRET_KEY)
    }catch(err){
        return res.status(500).json({
            status:500,
            message:"The token is incorrect"
        })
    }
    if(payload.expireAt < moment().unix()){
        return res.status(500).json({
            status:500,
            message:"The token is expired now"
        })
    }
    res.userId = payload.id
    next()
};

export { checkToken }