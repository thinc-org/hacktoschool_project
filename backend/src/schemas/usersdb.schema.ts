import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class UsersDB {

    @Prop()
    _id: Types.ObjectId;

    @Prop()
    nickName: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    description: string;

    @Prop()
    role: string;

    @Prop()
    coursesId: string[];

    @Prop()
    imageURL: string;



}

export type UsersDocument = UsersDB & Document;

export const UsersSchema = SchemaFactory.createForClass(UsersDB);