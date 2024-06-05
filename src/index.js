const cors=require("cors");
const express = require('express');
const { error } = require('highcharts');
const multer = require("multer");
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
    res.send("API Node JS for wine analytics");
})

app.post('/api/GetUserPWD', multer().none(),(req,res)=> {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Members');
            var query = {EMAIL:req.body.email,PASSWORD:req.body.pwd};
            var data = await collection.find(query).toArray();
            res.send(data); //response.json("Updated success");
        } finally {
            // Close the database connection when finished or an error occurs
            //await client.close();
        }
    }
    run().catch(console.error);
})

// Region for Metadata
app.get('/api/GetMetadata', (req,res)=> {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Metadata');
            
            // Find the first document in the collection
            var data = await collection.find({}).toArray();
            res.send(data);
        } finally {
            // Close the database connection when finished or an error occurs
            //await client.close();
        }
    }
    run().catch(console.error);
})

app.get('/api/GetMetadata_graphColor', (req,res)=> {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Color_Lincoln');
            var query = {ID:req.query.condition};
            
            var data = await collection.find(query).toArray();
            res.send(data);
        } finally {
            //await client.close();
        }
        }
    run().catch(console.error);
})

app.get('/api/GetMetadata_graph', (req,res)=> {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Metadata_Graph');
            var query = {Filter:req.query.condition};
            
            var data = await collection.find(query).toArray();
            res.send(data);
        } finally {
            //await client.close();
        }
        }
    run().catch(console.error);
})

app.get('/api/GetMetadata_production', (req,res)=> {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Metadata');
            var query = {Production:req.query.condition};
            
            var data = await collection.find(query).toArray();
            res.send(data);
        } finally {
            //await client.close();
        }
        }
    run().catch(console.error);
})


//Physical data CRUD
app.get('/api/GetPhysicaldata', (req,res)=> {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Physical_Data');
            
            // Find the first document in the collection
            var data = await collection.find({}).toArray();
            res.send(data);
        } finally {
            // Close the database connection when finished or an error occurs
            //await client.close();
        }
    }
    run().catch(console.error);
})

app.get('/api/DeletePhysical', (req,res)=> {
    async function run() {
        try {
            console.log("testsets");
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Physical_Data');
            var query = {ID: req.query.condition};
            console.log("delete condition"+req.query.condition)

            data = await collection.delete(query).toArray();
            res.json("Deleted success");
        } finally {
            // Close the database connection when finished or an error occurs
            //await client.close();
        }
    }
})

app.post('/api/AddPhysical', multer().none(),(req,res)=> {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Physical_Data');
            //var query = {ID:req.body.ID,TA:req.body.TA,Gluc_Fruc:req.body.Gluc_Fruc,pH:req.body.pH,Free_Sulphur:req.body.Free_Sulphur,Ethanol:req.body.Ethanol};
            var query = {ID:"NODEjs1",TA:1,Gluc_Fruc:1,pH:1,Free_Sulphur:1,Ethanol:1};
            data = await collection.insertOne(query);
            res.json("Added Successfully");
        } finally {
            // Close the database connection when finished or an error occurs
            //await client.close();
        }
    }
    run().catch(console.error);
})
    