import { User } from '../entity/User';
import { Router } from 'express';
import { getRepository } from "typeorm";
import { UserController } from '../controller/UserController';
export const routerUser = Router();

const userCtrl = new UserController();

/**
 * Serviço pra salvar um novo usuário
 */
routerUser.post('/', async (req, res) => {
    const { name, cpf, email, color } = req.body;

    const repo = getRepository(User);

    if (await repo.findOne({
        where: { cpf }
    })) {
        return res.status(409).json('CPF already exists');
    }

    if (await repo.findOne({
        where: { email }
    })) {
        return res.status(409).json('Email already exists');
    }


    const user = new User(name, cpf, email, color);
    const userSave = await userCtrl.save(user);
    res.json(userSave);
});


/**
 * Serviço para recuperar todos os usuários
 */
routerUser.get('/', async (req, res) => {
    const users = await userCtrl.listAll();
    res.json(users);
});
