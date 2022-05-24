const express = require('express');
const router = require('./routes/route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("",{newurlparser : true}).then().catch();

app.use('/',router);

app.listen(3000);