import { Router } from "express";
import UserController from './controllers/UserController'

const router = Router()

router.get('/users', UserController.index)
router.post('/user/create', UserController.create)
router.get('/user/findById/:id', UserController.findById)
router.put('/user/findByIdAndUpdate/:id', UserController.findByIdAndUpdate)
router.delete('/user/findByIdAndDelete/:id', UserController.findByIdAndDelete)

export default router
