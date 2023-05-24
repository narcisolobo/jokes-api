/**
 * This approach is also a pretty major departure
 * from the code we teach. Express has a nice router
 * included and we should use it.
 *
 * Students can also better understand the import/export
 * syntax by importing named exports from the controller.
 *
 * This code also clearly shows the student RESTful routing.
 * Controller functions share a path, but have differing
 * methods.
 */

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
