import { Request, Response } from "express";
import PemiluService from "../services/PemiluService";

export default new (class TodoController {
	create(req: Request, res: Response) {
		PemiluService.create(req, res);
	}
})();
