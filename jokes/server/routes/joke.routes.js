const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.get("/api/joke/random", JokeController.findRandomJoke);
    app.put("/api/jokes/update/:id", JokeController.updateOneJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteOneJoke);
};

