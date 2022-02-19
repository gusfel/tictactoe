const express = require('express');

const app = express();
const port = 3010;

app.get('/', (req, res) => {
  console.log('hi');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
