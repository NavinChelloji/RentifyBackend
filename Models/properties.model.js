const mongoose=require('mongoose')
const MealsSchema=new mongoose.Schema(
    {
      "_id":String,
      "name":String,
      "price":String,
      "description":String,
      "image":String,  
      'seller':String,
      "likes":{
        type:Number,
        default:0,
      }
    }
)
module.exports=mongoose.model('Properties',MealsSchema)