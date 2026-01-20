import jwt from "jsonwebtoken";



export const authMiddleware=(req,res,next)=>{
    const token=req.header.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({error:"Unauthorized"});
    try{
        const decoded=jwt.verify(token,"your-secret-key");
        req.userId=decoded.userId;
        next();
    }catch{
        res.status(401).json({error:"Invalid token"});
    }   
}