# REST API

## Constants

| Moves         |
|---------------|
| `ROCK`        |
| `PAPER`       |
| `SCISSORS`    |


| Game State    | Description                                       |
|---------------|-------------------------------------------------- |
| `CREATED`     | Game has been created, no moves yet               |
| `FIRST_MOVE`  | The first player has made a move                  |
| `WINNER`      | Both players have played, there is a winner       |
| `DRAW`        | Both players have played and made the same move   |


## Create Game

Creates a new Rock Paper Scissors game. 

Request
```
POST [server]/games
{
  "gameId": "42"
}
```
Response
```
HTTP/1.1 201 Created
Location: [server]/games/42
```


## Get Game

Gets the current state of a specific game.

Request
```
GET [server]/games/{gameId}
```
Response
```
HTTP/1.1 200 OK
{
    "players": [
        {
            "playerId": "abc"
            "move": "ROCK",
        },
        {
            "playerId": "xyz"
            "move": "PAPER",
        }
    ],
    "state": "WINNER",
    "winner": "xyz",
    "expirationTime": 1506195639
}
```


## Make Move

A player makes a move in an existing game.

Request
```
POST [server]/move
{
    "gameId": "13",
    "playerId": "pqr",
    "move": "ROCK"
}
```
Response
```
HTTP/1.1 200 OK
{
    "players": [
        {
            "playerId": "pqr"
            "move": "ROCK",
        }
    ],
    "gameId": "3",
    "state": "FIRST_MOVE"
    "expirationTime": 1506197262,
}
```


## Get Leaderboard

Returns the leaderboard based on the score of all games.

Request
```
GET [server]/leaderboard
```
Response
```
HTTP/1.1 200 OK
[
    {
        "playerId": "abc"
        "score": 10,
    },
    {
        "playerId": "qpr"
        "score": 5,
    },
    {
        "playerId": "xyz"
        "score": 1,
    }
]
```