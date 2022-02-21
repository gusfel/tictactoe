const express = require('express');
const cors = require('cors');

const app = express();
const port = 3010;
app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  console.log(req.body);
  res.end();
});

app.get('/oldGame', (req, res) => {

});

app.get('/newGame', (req, res) => {

});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
