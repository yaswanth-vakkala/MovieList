import express from 'express';
import * as movieController from '../../controllers/moviesController.js';

const router = express.Router();

router.get('/', movieController.getMovies);
router.get('/:id', movieController.getMovie);
router.post('/', movieController.postMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

export default router;
