require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');
const path = require('path');
const https = require('https');
const helmet = require('helmet');
const compression = require('compression');

const User = require("./models/user"); // Update with your Mongoose models
const Expense = require("./models/expense"); // Update with your Mongoose models
const Orders = require("./models/orders"); // Update with your Mongoose models
const Leaderboard = require("./models/leaderboard"); // Update with your Mongoose models
const ForgotPasswordRequests = require("./models/ForgotPasswordRequests"); // Update with your Mongoose models
const Download = require('./models/download'); // Update with your Mongoose models

const loginRoute = require("./router/loginRoute");
const userRoute = require("./router/userRoute");
const expenseRoute = require("./router/expenseRoute");
const passwordRoute = require("./router/passwordRoute");
const auth = require("./authorization/auth");

// const serverKey = fs.readFileSync('server.key');
// const serverCert = fs.readFileSync('server.cert');

// app.use(helmet());
app.use(compression());

app.use(bodyParser.json());
app.use(cors());

app.use(loginRoute);
app.use(userRoute);
app.use(expenseRoute);
app.use(passwordRoute);

app.use((req, res, next) => {
  // console.log(req.url);
  // res.send('<h1>BACKEND IS WORKING</h1>');
  res.sendFile(path.join(__dirname, `FRONTEND/${req.url}`));
});

mongoose.connect('mongodb+srv://sagarsonker56625:TMlRMjctWItcy1fe@cluster1.tow2zll.mongodb.net/?retryWrites=true')
  .then(() => {
    // https.createServer({ key: serverKey, cert: serverCert }, app).listen(3000);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
