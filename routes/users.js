import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {getUsers, getUser, createUser, deleteUser, updateUser} from '../controllers/users.js';

export const usersRoutes = express.Router();

usersRoutes.get('/', getUsers);

usersRoutes.post('/',createUser);

usersRoutes.get('/:id',getUser);

usersRoutes.delete('/:id', deleteUser);

usersRoutes.patch('/:id', updateUser );