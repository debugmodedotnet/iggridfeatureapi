var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();


var tradeblotterfx = require ('./tradeblotterfx');
var contacts = require ('./contacts');
var priceblotterbond = require ('./priceblotterbond');
var tradeblotterbond = require ('./tradeblotterbond');
var ftseclose = require('./ftseclose');
var northwindorders = require('./northwindorders');
var priceblottercdsindex = require('./priceblottercdsindex');
var priceblottercommodity = require('./priceblottercommodity');
var priceblotterfx = require('./priceblotterfx');
var tradeblottercds = require('./tradeblottercds');
var tradeblottercdsindex = require('./tradeblottercdsindex');
var tradeblottercommodity = require('./tradeblottercommodity');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();


// all other code will go here 

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.route('/contacts').get((req,res)=>{
    let contactsdata  = contacts.data;
    res.send(contactsdata);
});

router.route('/ftseclose').get((req,res)=>{
    let ftseclosedata  = ftseclose.data;
    res.send(ftseclosedata);
});

router.route('/tradeblottercommodity').get((req,res)=>{
    let tradeblottercommoditydata  = tradeblottercommodity.data;
    res.send(tradeblottercommoditydata);
});


router.route('/tradeblottercdsindex').get((req,res)=>{
    let tradeblottercdsindexdata  = tradeblottercdsindex.data;
    res.send(tradeblottercdsindexdata);
});




router.route('/tradeblottercds').get((req,res)=>{
    let tradeblottercdsdata  = tradeblottercds.data;
    res.send(tradeblottercdsdata);
});



router.route('/northwindorders').get((req,res)=>{
    let northwindordersdata  = northwindorders.data;
    res.send(northwindordersdata);
});

router.route('/priceblotterfx').get((req,res)=>{
    let priceblotterfxdata  = priceblotterfx.data;
    res.send(priceblotterfxdata);
});

  


router.route('/priceblotterbond').get((req,res)=>{
    let priceblotterbonddata  = priceblotterbond.data;
    res.send(priceblotterbonddata);
});

router.route('/priceblottercommodity').get((req,res)=>{
    let priceblottercommoditydata  = priceblottercommodity.data;
    res.send(priceblottercommoditydata);
});


router.route('/priceblottercdsindex').get((req,res)=>{
    let priceblottercdsindexdata  = priceblottercdsindex.data;
    res.send(priceblottercdsindexdata);
});


router.route('/tradeblotterfx').get((req,res)=>{
    let tradeblotterfxdata  = tradeblotterfx.data;
    res.send(tradeblotterfxdata);
});

router.route('/tradeblotterbond').get((req,res)=>{
    let tradeblotterbonddata  = tradeblotterbond.data;
    res.send(tradeblotterbonddata);
});

app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);