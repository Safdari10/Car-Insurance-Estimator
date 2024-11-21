const express = require('express');
const path = require('path');
const cors = require('cors');
const imageRouter = require('./routes/imageRoutes.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Middleware for serving static files
app.use(express.static(path.join(__dirname, './dist')));

app.use(cors());
app.use(express.json());

// API route for image processing
app.use('/api/image', imageRouter);

// Catch-all route for React (if needed for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
