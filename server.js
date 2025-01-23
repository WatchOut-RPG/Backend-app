const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://BAHURJA:1234567889@cluster0.hhwof.mongodb.net/localApp');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/home', async (req, res) => {
  const homeData = await mongoose.connection.db.collection('home').find({}).toArray();
  return res.send(homeData);
});

app.get('/view', async (req, res) => {
  const viewData = await mongoose.connection.db.collection('view').find({}).toArray();
  return res.send(viewData);
});

app.get('/add-to-bag', async (req, res) => {
  const addToCart = await mongoose.connection.db.collection('addToBag').find({}).toArray();
  return res.send(addToCart);
})

// app.get('/home', async (req, res) => {
//   const data = await mongoose.connection.db
//   .collection('data')
//   .find({})  
//   .toArray();  
//   return res.send(data);
// });

app.listen(4000, (req, res) => {
  console.log(`Your server is on http://localhost:4000/`);
});