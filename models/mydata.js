const mongoose = require('mongoose');


const mydataSchema = new mongoose.Schema({
    name : String , 
    date : String
})


export default mongoose.models.mydata || mongoose.model('mydata',mydataSchema )