import { JsonController, Param, Body, Get, Post } from "routing-controllers";

@JsonController()
export default class UserController {
  @Get("/users")
  getAll() {
    return ["Yay users"];
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
