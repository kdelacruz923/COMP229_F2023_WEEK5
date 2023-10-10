import mongoose from "mongoose";
const Schema = mongoose.Schema; //alias for the Mongoose Schema

const ClothingSchema = new Schema
({
    name: String,
    brand: String,
    category: String,
    color: String,
    size: String,
    price: Number
})