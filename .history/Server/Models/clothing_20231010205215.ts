import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;    //alias for the Mongoose Schema

const ClothingSchema = new Schema
(
    {
    Name: String,
    Brand: String,
    Category: String,
    Color: String,
    Size: String,
    Price: Number
},
{
    collection:"clothing"
});


export interface ClothingDocument extends Document {
    // Define the structure of your document here
    Name: String,
    Brand: String,
    Category: String,
    Color: String,
    Size: String,
    Price: Number
}


const Model = mongoose.model("Clothing", ClothingSchema);
export default Model;