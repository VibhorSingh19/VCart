const express = require('express')
const app= express();
require('dotenv').config()
const mongoose = require('mongoose');
// load env variables
 
//routes
const userRoutes=require('./routes/user');
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});



app.use("/api",userRoutes);
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});