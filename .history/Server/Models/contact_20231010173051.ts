import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactSchema = new Schema;
({
    Fullame : String;

},
{
    collection: "contacts"
})