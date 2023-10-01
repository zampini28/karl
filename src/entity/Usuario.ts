import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('usuario')
export class Usuario {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column()
    n_telefone: string;

    @Column()
    email: string;

    @Column()
    usuario: string;

    @Column()
    nascimento: Date;

    @CreateDateColumn()
    cadastro_em?: Date;

    @UpdateDateColumn()
    atualizado_em?: Date;

    @Column({default: false}) // fix not given value null in database
    bloqueado?: boolean;

    @Column()
    senha: string;
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
