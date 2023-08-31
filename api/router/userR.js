import express from 'express';
import { createU, deleteU, getAll, getU, updateU } from '../controller/userC.js';

const route = express.Router();

route.post('/',createU);
route.put('/:id',updateU);
route.delete('/:id',deleteU);
route.get('/:id',getU);
route.get('/',getAll);

export default route;
