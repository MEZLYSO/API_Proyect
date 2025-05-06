import { type Response, type Request } from "express";
import userService from "../services/userService";
import { sendSucess, sendError } from "../utils/requestHandlers";

class userController {
  async getUsers(_req: Request, res: Response) {
    try {
      const users = await userService.getUsers();
      sendSucess(res, users);
    } catch (err: any) {
      sendError(res, err.message, 500);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await userService.getUser(id);

      if (!user) {
        sendError(res, "User not found", 404);
      } else {
        sendSucess(res, user);
      }
    } catch (err: any) {
      sendError(res, err.message);
    }
  }

  async insertUser(req: Request, res: Response) {
    try {
      const data = req.body;
      const user = await userService.postUser(data);
      if (!user) {
        sendError(res, "User not created", 500);
      } else {
        sendSucess(res, user);
      }
    } catch (err: any) {
      sendError(res, err.message);
    }
  }
}

export default new userController();
