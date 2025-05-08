import { Router } from "express";
import careerController from "../controllers/careerController";

const careerRouter = Router();

careerRouter.get("/", careerController.getCareers);
careerRouter.get("/:id", careerController.getCareer);
careerRouter.post("/", careerController.insertCareer);

export default careerRouter;
