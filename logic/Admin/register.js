const userSchema = require('../../helpers/mongoSchema/login')
const jwt = require('jsonwebtoken');

async function login(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("result of ", email, password)
            const newUser = new userSchema({ email, password });
            await newUser.save();
            // const user = await userSchema.findOne({ email });
            console.log("userrr", user)
            if(user){
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