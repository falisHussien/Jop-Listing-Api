const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title:
   { type: String,
     required: true 
    },
  description: { 
    type: String, 
    required: true 
},
  company: { 
    type: String, 
    required: true
 },
  location: { 
    type: String,
     required: true 
    },
  salary: {
     type: Number, 
     required: true
     },
  applications: [{ userId: mongoose.Schema.Types.ObjectId, coverLetter: String }],
});

module.exports = mongoose.model('Job', jobSchema);
