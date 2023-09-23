import mongoose from "mongoose";
import dotenv from "dotenv"
const password = "o9sq9m8Rqi4hxUru";
const dbname = "gmail_clone";
dotenv.config()

mongoose.set('strictQuery', true); 
const Connection = async()=>{
    try {
       await mongoose.connect(`mongodb+srv://gibinralph:${password}@cluster0.kn2wfoh.mongodb.net/${dbname}?retryWrites=true&w=majority `,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
      })
       console.log(`Connected to Database Successfully`);
    } catch (error) {
        console.log('Disconnected =>',error);
    }
}
/*mongodb+srv://josesabeena:${password}@cluster0.amrduw5.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=AtlasApp 


mongodb+srv://gibinralph:${password}@cluster0.kn2wfoh.mongodb.net/${dbname}?retryWrites=true&w=majority */
export default Connection;