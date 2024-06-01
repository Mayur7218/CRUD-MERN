import { create, deleteUser, get, getAll, updateUser } from "../controller/userController.js";
import express from 'express'

const route=express.Router();
route.post('/create',create);
route.get('/get/:id',get);
route.get('/get',getAll)
route.put('/update/:id',updateUser)
route.delete('/delete/:id',deleteUser)

export default route;