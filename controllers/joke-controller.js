import Joke from '../models/joke-model.js';

async function createJoke(req, res) {
  try {
    const newJoke = await Joke.create(req.body);
    res.status(201).json(newJoke);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllJokes(req, res) {
  try {
    const allJokes = await Joke.find({});
    res.status(200).json(allJokes);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getOneJoke(req, res) {
  const { id } = req.params;

  try {
    const foundJoke = await Joke.findById(id);
    res.status(200).json(foundJoke);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updateOneJoke(req, res) {
  const { id } = req.params;

  try {
    const updatedJoke = await Joke.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedJoke);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteOneJoke(req, res) {
  const { id } = req.params;

  try {
    const deletedJoke = await Joke.findByIdAndDelete(id);
    res.status(200).json(deletedJoke);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export { createJoke, getAllJokes, getOneJoke, updateOneJoke, deleteOneJoke };
