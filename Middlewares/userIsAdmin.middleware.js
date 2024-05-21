const usersModel = require("../Models/users.model")

async function userIsAdmin(req,res,next){
    try{
        const user=await usersModel.findById({"_id":req.headers._id})
        if(user.role=="seller")
        {
           next()
        }
        else{
            return res.json({'msg':'User is not admin'})
        }
    }
       catch(err)
       {

           
       }
    
}
module.exports=userIsAdmin