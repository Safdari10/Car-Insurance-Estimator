const express = require('express');
const  cors = require('cors');
const imageRouter = require('./routes/imageRoutes.js');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

// Route for image processing
app.use('/api/image', imageRouter);

app.listen(PORT, () => {
console.log(`Server is running on ${PORT}`);    
})