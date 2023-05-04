const express = require('express')
const app = express();
const opertation = require('./dbfiles/dbOperations');
const cors = require('cors');

app.use(cors());


app.listen(3333,() => {
    console.log('listening on port 3333');
})

app.get('/', function(req, res){
    
})

app.get('/items', function(req, res){
    opertation.getItems().then(result=>{
        res.json(result);
    })
})
