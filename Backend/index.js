const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'../build')))
const port = process.env.PORT || 5000

const uri = process.env.MONGO_URI;
mongoose.connect(uri).then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log(err);
});
app.use('/api/user/',require('./routes/user'))
app.use('/api/session/',require('./routes/session'))
app.use('/api/org/',require('./routes/organization'))

app.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})