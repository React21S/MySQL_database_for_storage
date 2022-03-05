'use strict';

// for getting result in our browser. 
//REST
const http = require('http');
const path = require('path');
const port= 4000;
const host='localhost';

// we need to install cors and express (npm in stall express cors )
const cors = require('cors');

const express = require('express');
// const res = require('express/lib/response');
const app = express();

const DataStorage = require(path.join(__dirname, 'storage', 'dataAccessLayer.js'))


const storage = new DataStorage();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// get all
app.get('/api/mopeds/', (req,res)=>
    storage.getAll()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
);

// get specific moped
app.get('/api/mopeds/:mopedId', (req,res)=>
    storage.get(req.params.mopedId)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
);

// for deleting specific moped
app.delete('/api/mopeds/:mopedId', (req,res)=>
    storage.remove(req.params.mopedId)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
);

// for posting new moped
app.post('/api/mopeds', (req,res)=>{
    const moped = req.body;
    storage.insert(moped)
    .then(status=>res.json(status))
    .catch(err=>res.json(err));
});

// for updating moped
app.put('/api/mopeds/:mopedId', (req,res)=>{
    const moped = req.body;
    const mopedId = req.params.mopedId;
    storage.update(mopedId,moped)
    .then(status=>res.json(status))
    .catch(err=>res.json(err));
});


app.all('*', (req,res)=>res.json('not supported'));


// For running server 
server.listen(port,host, ()=>console.log(`Server ${host}:${port} here`))