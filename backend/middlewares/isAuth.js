import jwt from "jsonwebtoken"
const isAuth= async(req,res,next) =>
{
    try
    {
            const {token}= req.cookies
    if(!token)
    {
        return res.status(401).json({message:"token Not found"})
    }
    const verifyToken= await jwt.verify(token,process.env.JWT_SECRET)
    req.userId= verifyToken.userId
    next()
    }
    catch(error){

        console.log(error)
        return res.status(500).json({message:"is auth  Error"})
    }
}
export default isAuth