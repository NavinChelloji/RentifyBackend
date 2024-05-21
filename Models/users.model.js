const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    "_id":String,
    "name":String,
    "phoneNo":String,
    "password":String,
    "street":String,
    "postal-code":String,
    "city":String,
    "role":{
        type:String,
        default:"user"
    }

})
module.exports=mongoose.model('Users',userSchema)
