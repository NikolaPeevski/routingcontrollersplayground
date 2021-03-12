import { JsonController, Param, Body, Get, Post } from "routing-controllers";
import { Service } from "typedi";

@JsonController()
@Service()
export default class ItemsController {
    @Get("/items")
    getAll() {
        return ["Yay items"];
    }

    @Get("/items/:id")
    getOne(@Param("id") id: number) {
        return id;
    }

    @Post("/items")
    post(@Body() item: any) {
        return item;
    }
}
