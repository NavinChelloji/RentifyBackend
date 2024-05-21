let jwt=require("jsonwebtoken")

function usrerIsLogin(req,res,next){
    console.log('navin')
    try{
        
        const t=jwt.verify(req.headers.authorization,"abcd")
        
        console.log(t)
      
        next()
    }
    catch(err){
        return res.json({"error":"plz login"})
    }
}
module.exports=usrerIsLogin