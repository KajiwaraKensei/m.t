import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
})
export class User {
    @Prop({
        required: true,
        index: { unique: true }
    })
    username: string;

    @Prop({
        required: true,
    })
    password: string

    @Prop({
        required: false,
    })
    createdAt: number

    @Prop({
        required: false,
    })
    updatedAt: number
}

export const UserSchema = SchemaFactory.createForClass(User);