import { Response, Request, NextFunction } from "express";
import { SECRET } from "../utils/constants";
import jwt from "jsonwebtoken";

// declare global {
//   namespace Express {
//     interface Request {
//       id?: string;
//       // studentId?: ObjectId ;
//     }
//   }
// }
//TODO: think about checking if the user exists in the database first, in casae someone grabs the token and then tries to replicate it

export const verifyJWTToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["x-access-token"] as string;

  if (!token) {
    return res.status(403).send({
      message: "Authorization Failed. No access token",
    });
  }

  jwt.verify(token, SECRET, (err: any) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).send({
          message: "Token expired!",
        });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(401).send({
          message: "Invalid token!",
        });
      } else {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }
    }
    // req.id = decoded.id;
    next();
  });
};
