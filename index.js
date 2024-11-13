const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = 3000;

// Define a route at '/user'
app.get('/user', (req, res) => {
  res.json("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
