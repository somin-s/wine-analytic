// var Express = require("express");
// var MongoClient=require("mongodb").MongoClient;
// var cors=require("cors");
// var multer=require("multer");

// var app=Express();
// app.use(cors());

// var CONNECTION_STRING="mongodb+srv://sarawootsomin:KIG4WJxkcAjWipg0@cluster0.ncw5lvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// var DATABASENAME="sample_mflix"
// var database;

// app.listen(5038,()=>{
//     MongoClient.connect(CONNECTION_STRING,(error,client)=>{
//         database=client.db(DATABASENAME);
//         console.log("DB connection successful!");
//     })
// })


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://sarawootsomin:KIG4WJxkcAjWipg0@cluster0.ncw5lvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri);

// const Express = require("express");
// const app=Express();

// async function run() {
//   try {
//     await client.connect();
//     const db = client.db('sample_mflix');
//     const collection = db.collection('movies');

//     // Find the first document in the collection
//     const first = await collection.findOne();
//     console.log(first);
//   } finally {
//     // Close the database connection when finished or an error occurs
//     await client.close();
//   }
// }
// run().catch(console.error);

const cors=require("cors");
const express = require('express');
const { error } = require('highcharts');
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://sarawootsomin:KIG4WJxkcAjWipg0@cluster0.ncw5lvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

const app= express()
app.use(cors());

client.connect().then(() => {
    console.log('Connected to Mongo DB');
    app.listen(3000, ()=> {
        console.log('Run port 3000');
    })
}).catch((error) => {
    console.log(error);
})

app.get('/', (req,res) => {
    res.send("Hello Node API");
})


app.get('/api/GetMetadata', (req,res)=> {
    async function run() {
        try {
            await client.connect();
            const db = client.db('Pinot');
            const collection = db.collection('Metadata');
    
            // Find the first document in the collection
            const data = await collection.find({}).toArray();
            res.send(data);
        } finally {
            // Close the database connection when finished or an error occurs
            await client.close();
        }
        }
    run().catch(console.error);
})

app.get('/api/GetMetadata_graphColor', (req,res)=> {
    async function run() {
        try {
            await client.connect();
            const db = client.db('Pinot');
            const collection = db.collection('Color_Lincoln');
    
            // Find the first document in the collection
            console.log(req.query.id);
            //const query = {ID:'2016S_2018'};
            const query = {ID:req.query.id};
            
            const data = await collection.find(query).toArray();
            res.send(data);
        } finally {
            // Close the database connection when finished or an error occurs
            await client.close();
        }
        }
    run().catch(console.error);
})



    