import { Service } from "typedi";
import { Connection, createConnection, getManager } from "typeorm";
import UserEntity from "../entities/user.entity";

@Service()
export default class UserService {
    private connection!: Connection;
    constructor() {}

    async getUsers() {
        await this.getConnection();
        const userManager = getManager();
        return await userManager.find(UserEntity);
    }

    async getConnection(): Promise<void> {
        if (!this.connection) {
            console.log("Creating connection..");
            this.connection = await createConnection();
            console.log("Connection created...");
        }
    }
}
