const { Schema } = require('mongoose') 
//this connects to mongoose for this file

const airport = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    code: { type: String, required: true },
  },
    { timestamps: true }
)

module.exports = airport