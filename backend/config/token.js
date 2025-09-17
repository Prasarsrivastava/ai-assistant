import jwt from "jsonwebtoken"
const genToken=(userId)=>{
    try{
        const token=jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"10d"})
        return token
    }
    catch(error){
        console.log("Error in token generation",error);
    }
}

export default genToken