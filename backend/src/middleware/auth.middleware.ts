import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader?.split(" ")[1]);
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    const token = authHeader.split(" ")[1];
    const secret = process.env.JWT_SECRET;

    if(!token){
        return res.status(401).json({
            message: "Token is missing"
        })
    }
    if(!secret){
        return res.status(500).json({
            message: "JWT secret is not configured",
        });
    }

    try {
        const decoded = jwt.verify(token,secret);
        if(typeof decoded === "string" || !("id" in decoded)){
            return res.status(401).json({
                message: "Invalid token payload"
            })
        }
        req.userId = decoded.id as string;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        })
    }
}