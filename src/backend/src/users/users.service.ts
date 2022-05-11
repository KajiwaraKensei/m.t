import { Model } from "mongoose"
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from "./schemas/user.schema"
@Injectable()
export class UsersService {


    constructor(
        @InjectModel("User") private readonly userModel: Model<UserDocument>,
    ) { }

    users: CreateUserDto[] = [];

    async crate(user: CreateUserDto) {
        const createUser = new this.userModel(user)
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
}
