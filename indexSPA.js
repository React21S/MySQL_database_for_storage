'use strict';

const http = require('http');
const path = require('path');

const express = require('express');
const app = express();

const fetch = require('./FetchLibrary');

const port= 3000;
const host='localhost';

app.use(express.json());
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req,res)=>res.sendFile(path.join(__dirname, 'index.html')));

// get data function 
app.get('/getAll', (req,res)=>{
    fetch('http://localhost:4000/api/mopeds', {mode:'cors'})
    .then(data=>data.json())
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
});

// post data function get method (get moped)
app.post('/getMoped', (req,res)=>{
    const mopedId=req.body.mopedId;
    if(mopedId && mopedId.length > 0){
        fetch(`http://localhost:4000/api/mopeds/${mopedId}`,{mode:'cors'})
        .then(data=>data.json())
        .then(result=>res.json(result))
        .catch(err=>res.json(err));
    }
    else{
        res.json({message:'empty mopedId', type:'err'})
    }
});

// add new moped to database
app.post('/add', (req, res)=>{
    const moped = req.body;
    const options = {
        method: 'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(moped)
    };
    fetch('http://localhost:4000/api/mopeds', options)
    .then(data=>data.json())
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
});

//remove moped from database
app.post('/remove', (req,res)=>{
    const mopedId=req.body.mopedId;
    if(mopedId&& mopedId.length > 0){
        fetch(`http://localhost:4000/api/mopeds/${mopedId}`,{method:'DELETE',
        mode:'cors'})
        .then(data=>data.json())
        .then(result=>res.json(result))
        .catch(err=>res.json(err));
    }
    else{
        res.json({message:'empty mopedId', type:'err'})
    }
});


// app.all('*', (req,res)=>res.json('not supported'));
server.listen(port,host, ()=>console.log(`Server is running at ${host}:${port}`));