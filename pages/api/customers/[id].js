import MyData from "@/models/mydata";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

dbConnect()


const handler = nc().delete(async(req, res) => {
   
    try {
        const posts = await MyData.findOneAndDelete({_id: req.query.id})
        res.send('Deleted !');
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }
   
   
  }) .put(async (req, res) => {

    try {
        const customer = await MyData.findOne({_id: req.query.id})
        customer.name = req.body.name
        await customer.save()
        res.send('Updated !');
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }

 
  }) 
 
  export default handler