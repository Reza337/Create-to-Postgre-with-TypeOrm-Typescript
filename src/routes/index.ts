import * as express from "express";
import PemiluController from "../controllers/PemiluController";

const router = express.Router();
router.post("/pemilu", PemiluController.create);

export default router;
