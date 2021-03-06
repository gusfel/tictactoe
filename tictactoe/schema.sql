-- psql -U postgres < schema.sql
DROP DATABASE IF EXISTS tictactoe;
CREATE DATABASE tictactoe;

\c tictactoe;

CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  winner VARCHAR(1)
);

CREATE TABLE game_records (
  id serial PRIMARY KEY,
  game_id INT NOT NULL,
  TL VARCHAR(1),
  TM VARCHAR(1),
  TR VARCHAR(1),
  ML VARCHAR(1),
  MM VARCHAR(1),
  MR VARCHAR(1),
  BL VARCHAR(1),
  BM VARCHAR(1),
  BR VARCHAR(1),
  FOREIGN KEY (game_id)
    REFERENCES games (id)
);