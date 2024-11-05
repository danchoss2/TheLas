import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (res, req, next) => {
    const { token } = res.cookies;
    if (!token) return res.status(401).json({ message: "No Token, Authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid Token" });

        req.user = user
        next();
    })

}


