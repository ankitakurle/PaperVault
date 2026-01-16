const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  name: String,
  city: String,
  state: String,
  country: {
    type: String,
    default: "India"
  },
  logoUrl: String,
  
});

module.exports = mongoose.model("University", universitySchema);
