import mongoose from 'mongooes';
const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://fp1admin:fp1admin@ds237770.mlab.com:37770/aca311-final-project');

const MusicianRoutes = require("./routes/MusicianRoutes");
app.use(MusicianRoutes);
const RequestRoutes = require("./routes/RequestRoutes");
app.use(RequestRoutes);



app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3002");
});
  
