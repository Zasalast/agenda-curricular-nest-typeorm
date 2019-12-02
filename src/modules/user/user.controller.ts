import { Controller, Post, Body, Response, HttpStatus, Get, Put, Delete, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Post()
    async CreateUser(@Response() res, @Body() user: CreateUserDto){
        const response = await this.userService.createUser(user)
       res.status(HttpStatus.OK).json(response);
    }

    @Get()
    async findAll(@Response() res ) {
       const response = await this.userService.findAll();
        res.status(HttpStatus.OK).json(response);
    }

    @Get(':id') 
    async findOne(@Response() res,@Param('id') id: number ) {
       const response = await this.userService.findOne(id);
        res.status(HttpStatus.OK).json(response);
    }

    @Put() 
    async UpdateUser(@Response() res,@Body() user: UpdateUserDto ) {
       const response = await this.userService.UpdateUser(user);
        res.status(HttpStatus.OK).json(response);
    }


    @Delete(':id') 
    async Delete(@Response() res,@Param('id') id: number ) {
       const response = await this.userService.Delete(id);
        res.status(HttpStatus.OK).json(response);
    }


}