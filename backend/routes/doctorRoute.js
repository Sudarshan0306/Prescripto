import express from 'express';
import { getAllDoctors } from '../controllers/doctorController.js';

const doctorRouter= express.Router();

doctorRouter.post('/list', getAllDoctors);

export default doctorRouter;