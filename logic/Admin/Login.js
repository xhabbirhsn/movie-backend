const User = require('../../helpers/mongoSchema/login')
const jwt = require('jsonwebtoken');

async function login(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({ email });
            console.log("user found", user)
            if(user !== null){
                const token = jwt.sign({ id: user._id, email: user.email }, 'passKey', { expiresIn: '1h' });
                resolve({ success: true, token });
            }else{
                reject('Invalid email or password')
            }
            
          } catch (error) {
            console.error('Login error:', error);
            reject("Error while fetching user data")
          }
    })
}

module.exports = login;