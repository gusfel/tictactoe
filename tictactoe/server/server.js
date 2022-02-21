const express = require('express');
const cors = require('cors');
const db = require('../DB/db');

const app = express();
const port = 3010;
app.use(express.json());
app.use(cors());

app.get('/oldGame', (req, res) => {
  const { gameId } = req.query;
  db.query(`SELECT * FROM game_records where game_id = ${gameId}`, (err, data) => {
    if (err) {
      res.send({ gameData: {} });
    }
    const gameData = data.rows[0];
    const gameDataArr = [];
    Object.keys(gameData).forEach((key) => {
      if (key !== 'game_id' && key !== 'id' && gameData[key]) {
        const upperKey = key.toUpperCase();
        gameDataArr.push([upperKey, gameData[key]]);
      }
    });
    res.send({ gameData: gameDataArr });
  });
});

app.get('/newGame', (req, res) => {
  db.query('INSERT INTO games (winner) VALUES (null) RETURNING id;', (err, data) => {
    const newGameId = data.rows[0].id;
    db.query(`INSERT INTO game_records (game_id) VALUES (${newGameId});`);
    res.send({ gameId: Number(newGameId) });
  });
});

app.post('/updateGame', (req, res) => {
  const { currPlayer, square, gameId } = req.body;
  db.query(`UPDATE game_records SET ${square} = '${currPlayer}' where game_id = ${gameId}`, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.status(200);
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
