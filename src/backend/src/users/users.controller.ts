import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    createUser(@Body(ValidationPipe) createUser: CreateUserDto) {
        this.usersService.crate(createUser)
    }

    @Get()
    returnAll() {
        return this.usersService.returnAll()
    }

    @Get(':uid')
    returnUser(@Param('uid') uid: string,) {
        return this.usersService.getUser(uid)
    }
}
