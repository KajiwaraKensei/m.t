import { Model } from "mongoose"
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from "./schemas/user.schema";
import * as bcrypt from "bcryptjs";
@Injectable()
export class UsersService {


    constructor(
        @InjectModel("User") private readonly userModel: Model<UserDocument>,
    ) { }

    users: CreateUserDto[] = [];

    async crate(user: CreateUserDto) {
        const createUser = new this.userModel({
            username: user.username,
            password: await bcrypt.hash(user.password, 16)
        })
        console.log(createUser.password);

        return await createUser.save()
    }

    async returnAll() {
        return await this.userModel.find().exec()
    }

    async getUser(uid: string) {
        return await this.userModel.findOne({
            _id: uid,
        }).exec()
    }
    async getUserByName(name: string) {
        return await this.userModel.findOne({
            username: name,
        }).exec()
    }
}
