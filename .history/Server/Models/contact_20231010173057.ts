import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
    FullName : String;

},
{
    collection: "contacts"
})