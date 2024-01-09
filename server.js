const express = require('express')
const app = express();
const mongoose =require('mongoose')
const cors = require('cors')

app.get('/',(req,res)=>{res.send("hello from server..")})

app.use(cors())
app.use(express.json())

const Db = async()=>{
    try {
        await mongoose.connect('mongodb+srv://MEDICHARLASRAVANTHI:8gjYqFJBGz2CxrW@test-pro-db.62qpvzg.mongodb.net/stickyNavigationBar?retryWrites=true&w=majority').then(
            (conn)=>{
                console.log("Connected to DataBase...")
            }
        )
    } catch (error) {
        console.log(error)
    }
}



app.listen(4000,()=>{console.log("Server is running on port 4000...")})
Db();
