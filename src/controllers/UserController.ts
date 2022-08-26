import { Request, Response } from "express"
import UserModel from "src/database/UserModel"

const UserController = {
  async index(req: Request, res: Response): Promise<Response> {
    let data = await UserModel.find()
    return res.json(data)
  },
  async create(req: Request, res: Response): Promise<Response> {
    let data = await UserModel.create(req.body)
    return res.json(data)
  },
  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    let data = await UserModel.findById(id)
    return res.json(data)
  },
  async findByIdAndUpdate(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    let data = await UserModel.findByIdAndUpdate(id, req.body)
    return res.json(data)
  },
  async findByIdAndDelete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    let data = await UserModel.findByIdAndDelete(id, req.body)
    return res.json(data)
  },
}

export default UserController
