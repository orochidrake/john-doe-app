import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    constructor(name: string, cpf: string, email: string, color: string) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.color = color;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    color: string;
}
