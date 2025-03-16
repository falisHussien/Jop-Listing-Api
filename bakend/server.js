const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {}).then(() => {
  console.log("Connected to MongoDB");
});

// Authentication Middleware
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: "Authorization token is required" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.user = user;
    next();
  });
};

// Job Schema for Apply Section
const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: String,
  type: String,
  applications: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      coverLetter: String,
    }
  ],
});

const Job = mongoose.model('Job', jobSchema);

// User Schema for Login
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Apply Routes
app.get('/api/jobs/:jobId/applications', async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    res.json(job.applications);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post('/api/jobs/:jobId/apply', authenticate, async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const { coverLetter } = req.body;

    job.applications.push({ userId: req.user.id, coverLetter });
    await job.save();

    res.json({ message: "Successfully applied to the job!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login Routes
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Contact Routes
app.get('/api/contact', async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContactMessage = new Contact({
      name,
      email,
      message,
    });

    await newContactMessage.save();
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
