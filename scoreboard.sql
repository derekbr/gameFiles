DROP DATABASE IF EXISTS scoreboard;
CREATE DATABASE scoreboard;

CREATE TABLE scores (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  score VARCHAR
);

INSERT INTO scores (name, score)
  VALUES ('Score', '');
