const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  if (!req.headers.authorization) return res.sendStatus(401);
  const token = req.headers.authorization.split(" ")[1];
  const secretKey = req.app.locals.secretKey;
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.sendStatus(403); // Invalid token
      }
      req.user = decoded; // Attach the decoded payload to the request object
      next(); // Token is valid, proceed to the next middleware or route
    });
  } else {
    res.sendStatus(401); // No token provided
  }
};

module.exports = authenticateToken;
