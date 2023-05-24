import { Router } from 'express';
import {
  createJoke,
  getAllJokes,
  getOneJoke,
  updateOneJoke,
  deleteOneJoke,
} from '../controllers/joke-controller.js';

const router = Router();

// prettier-ignore
router
  .route('/')
  .post(createJoke)
  .get(getAllJokes);

// prettier-ignore
router
  .route('/:id')
  .get(getOneJoke)
  .put(updateOneJoke)
  .patch(updateOneJoke)
  .delete(deleteOneJoke);

export default router;
