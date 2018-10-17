const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CuponSchema = new Schema({
    code: {type: String, required: true, max: 10},
    discount: {type: Number, required: true},
    startDate: { type: Date, required: true},
    endDate: { type: Date, required: true},
    used: { type: Boolean, required: true},
});


// Export the model
module.exports = mongoose.model('Cupon', CuponSchema);