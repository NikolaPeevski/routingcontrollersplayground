import { JsonController, Param, Body, Get, Post } from "routing-controllers";
import { Service } from "typedi";
import UserService from "../services/UserService";

@JsonController()
@Service()
export default class UserController {
    constructor(private userService: UserService) {}

    @Get("/users")
    getAll() {
        return this.userService.getUsers();
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        return id;
    }

    @Post("/users")
    post(@Body() user: any) {
        return user;
    }
}
