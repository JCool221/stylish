const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const buildPath = path.join(__dirname, '..', 'client', 'dist')

// Serve static files from the build directory
app.use(express.static(buildPath));

// Route all requests to the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
