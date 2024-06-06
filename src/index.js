const cors=require("cors");
const express = require('express');
const { error } = require('highcharts');
const bodyParser = require('body-parser');
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

//For fromForm
app.post('/api/GetUserPWD', multer().none(),(req,res)=> {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Members');
            console.log(req.body.email);
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

//For FromBody
const forms = multer();
app.use(bodyParser.json());
app.use(forms.array()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/AddPhysical', function(req, res) {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Physical_Data');
            var query = {ID:req.body.ID,TA:req.body.TA,Gluc_Fruc:req.body.Gluc_Fruc,pH:req.body.pH,Free_Sulphur:req.body.Free_Sulphur,Ethanol:req.body.Ethanol};
            collection.insertOne(query);
            res.json("Added Successfully");
        } finally {
            // Close the database connection when finished or an error occurs
            //await client.close();
        }
    }
    run().catch(console.error);
});
    
app.put('/api/UpdatePhysical', function(req, res) {
    async function run() {
        try {
            await client.connect();
            var db = client.db('Pinot');
            var collection = db.collection('Physical_Data');
            var ID = {ID:req.body.ID}
            var Desc = {$set:{TA:req.body.TA,Gluc_Fruc:req.body.Gluc_Fruc,pH:req.body.pH,Free_Sulphur:req.body.Free_Sulphur,Ethanol:req.body.Ethanol}};
            collection.updateOne(ID,Desc);
            res.json("Edited Successfully");
        } finally {
            // Close the database connection when finished or an error occurs
            //await client.close();
        }
    }
    run().catch(console.error);
});

app.delete('/api/DeletePhysical', function(req,res){
    
    try{
        console.log("testsdelelet");
        console.log(req.query.condition);
//             console.log("testsets");
        client.connect();
        var db = client.db('Pinot');
        var collection = db.collection('Physical_Data');
        var query = {ID: req.query.condition};
//             console.log("delete condition"+req.query.condition)
        collection.findOneAndDelete(query);
        res.json("Deleted Successfully");
    } finally {
//             // Close the database connection when finished or an error occurs
//             //await client.close();
    }
});