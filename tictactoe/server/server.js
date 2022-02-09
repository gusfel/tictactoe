const express = require('express');

const app = express();
const port = 3010;
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
