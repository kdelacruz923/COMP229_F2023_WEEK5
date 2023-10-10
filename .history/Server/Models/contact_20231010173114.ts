import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
    FullName : String,
    EmaiAddress: String,
    ContactNumber: String

},
{
    collection: "contacts"
})