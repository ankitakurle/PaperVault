const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
    required: true
  },

  course: {
    type: String,
    required: true
  },

  branch: {
    type: String,
    required: true
  },

  year: {
    type: String,
    required: true
  },

  semester: {
    type: String,
    required: true
  },

  subject: {
    type: String,
    required: true
  },

  filePath: {
    type: String,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Paper", paperSchema);

