const express = require('express');
const path = require('path');
const querystring = require('node:querystring');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/auth/callback', function (req, res) {
  const query = querystring.stringify(req.query);

  res.redirect(`/#/auth/callback?${query}`);
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
