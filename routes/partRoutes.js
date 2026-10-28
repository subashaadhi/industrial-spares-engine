import express from 'express';
import {createPart, getParts, updatePart} from '../controllers/partController.js'

const router = express.Router();
// Map the root '/' to GET (view parts ) and POST (add part) router.route('/')

router.route('/')
.get(getParts)
.post(createPart);

// Map '/:id' to PUT (update a specific part)
router.route('/:id')
.put(updatePart);

export default router;