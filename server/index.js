require('dotenv').config()
const express = require('express');
const path = require('path');
const multer = require('multer')


const app = express();
const port = 3000;
const upload = multer();

const buildPath = path.join(__dirname, '..', 'client', 'dist')

// Serve static files from the build directory
app.use(express.static(buildPath));

app.use(upload.none())

// server routes
const routes = require('./routes/routeIndex')
app.use('/', routes)

// Route all requests to the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
