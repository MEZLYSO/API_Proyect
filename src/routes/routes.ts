import { Router } from "express";
import userRouter from "./userRoute";
import careerRouter from "./careerRoutes";

const router = Router();

router.use("/user", userRouter);
router.use("/career", careerRouter);

export default router;
