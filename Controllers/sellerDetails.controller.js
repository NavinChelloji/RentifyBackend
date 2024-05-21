
const userModel=require('../Models/users.model')

async function sellerDetails(req,res){
    try{
        
        res.json(await userModel.findById(req.headers._id))

    }
    catch(err){

    }

}
module.exports={sellerDetails}
