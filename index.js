const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {MongoClient}  = require('mongodb')
const PORT = process.env.PORT || 8000
const app = express();





app.use(cors());


app.get('/get-all-calls', async(req, res)=>{

    let callsDb = await db.collection('useralls').find({}).toArray()
    
    let calls = callsDb[0].arra.concat(callsDb[1].arra)
    return res.status(200).json({
        calls
      
    })
    

})

const connectionString = process.env.MONGO_URI;


let db;
MongoClient.connect(
    connectionString,
   
    async function (err, client) {
       
      db = client.db()
      app.listen(PORT, ()=>{console.log(`port: ${'sfsf'}`)})
      
    }
  )
