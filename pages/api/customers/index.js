import MyData from "@/models/mydata";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

dbConnect()


const handler = nc().get(async(req, res) => {
   
    try {
        const customers = await MyData.find({})
        res.send(customers);
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }
   
   
  }).post(async(req, res) => {
    const {name, date} = req.body
    const newCustomers = new MyData({name, date})
    try {
         await newCustomers.save()
        res.send('New Customer added !');
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }
  })



  export default handler