const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const usersRoute=require('./Routes/user.routes')

const app=express()
const MONGO_URL="mongodb+srv://navin:Naveen2000@nasaproject.ertmb86.mongodb.net/Rentify?retryWrites=true&w=majority"
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('images'))
async function startServer(){
    await mongoose.connect(MONGO_URL)
    app.use(usersRoute)
}
startServer()

app.listen(8000,()=>{
    console.log(`listining on port 8000`)
})