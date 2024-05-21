const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userModel=require('../Models/users.model')
async function userLogin(req,res){
    try{
        const user=await userModel.findById({"_id":req.body.email})
        
        if(user){
            let f=await bcrypt.compare(req.body.password,user.password)
           
            if(f)
            {
                res.json({"token":jwt.sign({"_id":user._id},"abcd"),"_id":user._id,"name":user.name,"role":user.role})
            }
            else
            {
                res.json({"msg":"check password"})
            }
            
        }
        else{
            res.json({"msg":"user not exist"})
        }
    }
    catch(err){
        console.log(err)

    }


}
async function userRegistration(req,res){
try{
    const user=await userModel.findById({"_id":req.body.email})
    if(user)
    {
        res.json({"msg":"account exists with given email"}) 
    }
    else{

    const hashcode=await bcrypt.hash(req.body.password,10)
    const data=new userModel({...req.body,"_id":req.body.email,"password":hashcode})
    await data.save()
    res.json({"msg":"account created"})
    }
}
catch(err)
{
    console.log(err)
}
}
module.exports={userLogin,userRegistration}