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
    Name: string;
    Brand: string;
    Category: string;
    Color: string;
    Size: string;
    Price: number;
}


const Model = mongoose.model("Clothing", ClothingSchema);
export default Model;