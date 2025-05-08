import { type Response, type Request } from "express";
import careerService from "../services/careerService";
import { sendError, sendSucess } from "../utils/requestHandlers";

class careerController {
  async getCareers(_req: Request, res: Response) {
    try {
      const carrer = await careerService.getCareers();
      sendSucess(res, carrer);
    } catch (err: any) {
      sendError(res, err.message, 500);
    }
  }

  async getCareer(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      const carrer = await careerService.getCareer(id);
      if (!carrer) {
        sendError(res, "User not found", 500);
      } else {
        sendSucess(res, carrer);
      }
    } catch (err: any) {
      sendError(res, err.message, 500);
    }
  }

  async insertCareer(req: Request, res: Response) {
    try {
      const data = req.body;
      const carrer = await careerService.postCareer(data);
      if (!carrer) {
        sendError(res, "Mark not created", 500);
      } else {
        sendSucess(res, carrer);
      }
    } catch (err: any) {
      sendError(res, err.message);
    }
  }
}

export default new careerController();
