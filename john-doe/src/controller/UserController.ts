import { getManager } from "typeorm";
import { User } from "../entity/User";

export class UserController {

    async save(user: User) {
        const userSave = await getManager().save(user);
        return userSave;
    }

    async listAll() {
        const user = await getManager().find(User);
        return user;
    }

}