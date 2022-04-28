const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4545;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, ''));
});

app.listen(port, () => console.log(`Take us to warp ${port}!`));
