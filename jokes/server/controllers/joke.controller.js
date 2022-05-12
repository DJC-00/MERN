const Joke = require ("../models/joke.model");

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokesFromDb => res.json({jokes : allJokesFromDb}))
        .catch(err => res.json({message: "Something went wrong", error:err}))
};

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJokeFromDb => res.json({joke : oneJokeFromDb}))
        .catch(err => res.json({message: "Something went wrong", error:err}))
};

module.exports.findRandomJoke = (req,res) => {
    let random = null;
    Joke.count().exec(function(err, count){
        random = Math.floor(Math.random() * count)
    })
    Joke.find()
        .then(allJokesFromDb => res.json({joke : allJokesFromDb[random]}))
        .catch(err => res.json({message: "Something went wrong", error:err}))
};

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke : newJoke}))
        .catch(err => res.json({message: "Something went wrong", error:err}))
};

module.exports.updateOneJoke = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({joke : updatedJoke}))
        .catch(err => res.json({message: "Something went wrong", error:err}))
};

module.exports.deleteOneJoke = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(deleteResult => res.json({joke : deleteResult}))
        .catch(err => res.json({message: "Something went wrong", error:err}))
};
