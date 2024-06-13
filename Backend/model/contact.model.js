import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,


    },
    password: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        reqired: true,
    }
});
const Data = mongoose.model("Data",dataSchemaSchema);

export default Data;