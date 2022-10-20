const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlenght: [3, 'First Name must be more that 3 characters'],
        maxlenght: [99, 'First Name must be less that 99 characters']
    },
    lastName: {
        type: String,
        required: true,
        minlenght: [3, 'First Name must be more that 3 characters'],
        maxlenght: [99, 'First Name must be less that 99 characters']
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlenght: [6, 'to weak'],
        unique: true,
    }
},
{
    timestamps: true
})


userSchema.methods.verifyPassword = function(password){
    console.log('password from User' + password);
    console.log('password from DataBase' + this.password);
    return bcrypt.compareSync(password, this.password)
}



const User = mongoose.model('User', userSchema)

module.exports = User