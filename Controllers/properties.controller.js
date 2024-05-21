const properties=require('../Models/properties.model')
const {v4:uuid4}=require('uuid')
const multer=require('multer')
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./images')
    },
    filename:function(req,file,cb){
        const uniqueSuffix=Date.now()+'-'+Math.round(Math.random()*1E9)
        cb(null,file.fieldname+'-'+uniqueSuffix+'.'+file.mimetype.split("/")[1])
    }
})
const upload=multer({storage:storage})
async function getProperties(req,res){
    try{
        const data=await properties.find()
        res.json(data)
    }
    catch(err){

    }

}
async function addProperties(req,res){
    try{
        
        await new properties({"_id":uuid4(),...req.body,"image":req.file.filename,"seller":req.headers._id}).save()
        res.json({"msg":"prod added"})

    }
    catch(err)
    {
console.log(err)
    }
    
}
async function addLikes(req,res) {
   
   
    try{
       
        await properties.findByIdAndUpdate(req.body.id,{'$inc':{'likes':1}})
      
        res.json(await properties.findById(req.body.id,{'likes':1}))
    }
    catch(err){

    }
}
async function getAddedProperties(req,res){
    try{
       
        res.json(await properties.findById(req.body._id))
    }
    catch(err){

    }
}
module.exports={getProperties,addProperties,upload,addLikes,getAddedProperties
}