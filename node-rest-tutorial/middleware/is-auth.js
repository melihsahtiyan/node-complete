const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Get token from request header
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }

  // Get token from header
  const token = authHeader.split(" ")[1];
  let decodedToken;

  // Verify token
  try {
    decodedToken = jwt.verify(
      token,
      require("../appsettings").appsettings.secretKey
    );
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }

  // Token is invalid
  if (!decodedToken) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }

  // Token is valid
  req.userId = decodedToken.userId;
  next();
};
