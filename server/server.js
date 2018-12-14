const express = require('express');
const path = require('path');
const app = express();
const buildPath = path.join('__dirName', '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(buildPath, 'index.html');
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});