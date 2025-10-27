const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const gentoken = async (id) => {
    try {
        const token = await jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "7d" });
        return token;
    } catch (error) {
        console.log("Eror On genrate token")
    };


}


module.exports = gentoken;