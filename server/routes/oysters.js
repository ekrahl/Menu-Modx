import express from "express";
import { getOysters, getOyster, createOyster, updateOyster, deleteOyster } from '../controllers/oysters.js';

const router = express.Router();

router.get('/', getOysters);
router.post('/', createOyster);
router.get('/:id', getOyster);
router.patch('/:id', updateOyster);
router.delete('/:id', deleteOyster);

export default router;