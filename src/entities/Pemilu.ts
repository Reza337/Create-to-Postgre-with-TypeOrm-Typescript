import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "pemilus" })
export class Pemilus {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	name: string;

	@Column("text")
	visi: string;

	@Column({ nullable: false })
	image: string;
}
