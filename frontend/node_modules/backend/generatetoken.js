const jwt = require('jsonwebtoken');

const generateToken = (userid, res) => {
    const token = jwt.sign({ userid }, "secretkey123", {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        httpOnly: true,  // Prevents client-side JavaScript from accessing the cookie
       // Ensures the cookie is sent over HTTPS only in production
        sameSite: "strict",  // Prevents CSRF attacks
        maxAge: 15 * 24 * 60 * 60 * 1000  // 15 days in milliseconds
    });
};

module.exports = generateToken;
