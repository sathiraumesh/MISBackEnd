const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stock = new Schema({

    items:[],
    createdAt: { type: Date, default: Date.now }
});




module.exports = mongoose.model("stocks", stock);