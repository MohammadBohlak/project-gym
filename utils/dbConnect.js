const mongoose = require('mongoose');

export default  async function dbConnect() {
    try {
      await mongoose.connect('mongodb+srv://mohammad:mohammad@cluster0.apvdq.mongodb.net/mydata' ,
      {useUnifiedTopology:true , useNewUrlParser:true});

      console.log('Connected successfully !')

    } catch (error) {
        console.log(error)
    }
}

 