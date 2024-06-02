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
    res.send("API Node JS for wine analytics");
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
            //const query = {ID:'2016S_2018'};
            const query = {ID:req.query.condition};
            
            const data = await collection.find(query).toArray();
            res.send(data);
        } finally {
            // Close the database connection when finished or an error occurs
            await client.close();
        }
        }
    run().catch(console.error);
})



    