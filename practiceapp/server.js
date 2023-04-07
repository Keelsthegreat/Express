const express = require('express');
const mongoose = require('mongoose');
const SneakerData = require('./models/Sneaker')
const mongoConfig = require('./config')
const methodOverride = require('method-override')
require('dotenv').config()

const app = express();
const PORT = 3000

//MIDDLEWARE
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.json());
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(methodOverride('_method'))

// ROUTING 
app.get('/', async (req, res) => {
  const sneakerData = await SneakerData.find({});
  res.render('Index',{sneakers:sneakerData});
});

app.get('/sneaker/new', async (req, res) => {
    res.render('New');
  });
  
  app.get('/sneaker/:id', async (req, res) => {
    const sneakerData = await SneakerData.findById(req.params.id);
    res.render('Show',{sneaker:sneakerData});
  });
  
app.post('/sneaker/new', async (req, res) => {
  const sneakerData = await new SneakerData(req.body);
//  
console.log(req.body, 'Checking post route');
  await sneakerData.save();
  res.redirect('/');
});

app.put('/sneaker/:id', async (req, res) => {
  const { id } = req.params;
  const formData = req.body;

//remove undefined fields
Object.keys(formData).forEach(key => formData[key] === undefined ? delete formData[key] : {});

  const sneakerData = await SneakerData.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(sneakerData);
});

app.delete('/sneaker/:id', async (req, res) => {
    console.log('deleted')
  const { id } = req.params;
  await SneakerData.findByIdAndDelete(id);
  res.send('Sneaker data deleted successfully');
});


// SERVER LISTENING TO PORT 
app.listen(PORT, () => {
  console.log(`Currently listening to ${PORT}` );
});

mongoConfig()