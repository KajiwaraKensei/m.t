import { Body, Controller, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from "@nestjs/passport";
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    createUser(@Body(ValidationPipe) createUser: CreateUserDto) {
        console.log("createUser", createUser);

        return this.usersService.crate(createUser)
    }

    @Get()
    returnAll() {
        return this.usersService.returnAll()
    }

    @Get(':uid')
    @UseGuards(AuthGuard('jwt'))
    returnUser(@Param('uid') uid: string,) {
        return this.usersService.getUser(uid)
    }
}
