const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drugSchema = new Schema({

    drugId: { type: Number, unique: true, required: true },
    drugName: { type: String, required: true },
    dosage: { type: String, required: true },
    quantity:{type :Number,default:0},
    createdAt: { type: Date, default: Date.now }
});



module.exports = mongoose.model("drugs", drugSchema);