import express from 'express';
import { GetByIdRoute } from './getById';

const UserRouter = express.Router();

UserRouter.post('/login', GetByIdRoute);

export { UserRouter };
