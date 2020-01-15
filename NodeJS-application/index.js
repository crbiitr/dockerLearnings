const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('How are you doing');
});
 
app.listen(9081, () => {
  console.log('Listening on port 9081');
});