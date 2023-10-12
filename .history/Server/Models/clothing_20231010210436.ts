//import mongoose, { mongo } from "mongoose";
//const Schema = mongoose.Schema;    //alias for the Mongoose Schema

import mongoose, { Document, Schema } from 'mongoose';
export interface ClothingDocument extends Document {
    Name: string;
    Brand: string;
    Category: string;
    Color: string;
    Size: string;
    Price: number;
}


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

const Model = mongoose.model("Clothing", ClothingSchema);
export default Model;