import { Repository } from "typeorm";
import { Pemilus } from "../entities/Pemilu";
import { AppDataSource } from "../data-source";
import { createPemiluSchema } from "../utils/Pemilu";
import { Request, Response } from "express";

export default new (class PemiluService {
	private readonly PemiluRepository: Repository<Pemilus> =
		AppDataSource.getRepository(Pemilus);

	async create(req: Request, res: Response): Promise<Response> {
		try {
			const data = req.body;

			const { error } = createPemiluSchema.validate(data);
			if (error) return res.status(400).json({ error: error });

			const obj = this.PemiluRepository.create({
				name: data.name,
				visi: data.visi,
				image: data.image,
			});

			const pemilus = this.PemiluRepository.save(obj);
			return res.status(200).json(pemilus);
		} catch (err) {
			return res.status(500).json({ Error: "errow while inserting data" });
		}
	}
})();
