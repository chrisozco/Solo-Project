const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    }
},  {timestamps: true})

UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword)
.set(value=>this._confirmPassword = value)

UserSchema.pre('validate',function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword','Password must match confirmPassword')
    }
    next()
})

UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        console.log('Hashed Password:',hashedPassword)
        this.password = hashedPassword
        next()
    }
    catch{
        console.log('Error in Save',error)
    }
})

module.exports = mongoose.model('User', UserSchema)