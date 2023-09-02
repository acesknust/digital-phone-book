import { Response, Request,NextFunction } from "express";
import {  SECRET } from "../utils/constants";
import jwt from 'jsonwebtoken'
import { ObjectId } from "typeorm";

declare global {
    namespace Express {
        interface Request {
        id?: string; 
        studentId?: ObjectId ;
    }
    }
}

// interface OId {
//     $oid: string;
// }

export const verifyJWTToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["x-access-token"] as string

    if (!token) {
        return res.status(403).send({
            message: "Authorization Failed. No access token"
        })
    }

    jwt.verify(token, SECRET, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        req.id = decoded.id
        next()
    })
}