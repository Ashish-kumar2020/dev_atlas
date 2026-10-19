import jwt, { type SignOptions } from "jsonwebtoken";


export const generateJWTToken = (user_id: string) => {
    const key = process.env.JWT_SECRET ;
    if(!key){
        throw new Error("JWT_SECRET is not configured");
    }
    const expiresTime: SignOptions["expiresIn"] = (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"]) || "2h";
    const token = jwt.sign({id: user_id},key,{
        expiresIn: expiresTime
    });
    return token;
}