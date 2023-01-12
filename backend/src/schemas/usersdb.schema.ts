import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class UsersDB {

    @Prop()
    _id: Types.ObjectId;



}

export type UsersDocument = UsersDB & Document;

export const UsersSchema = SchemaFactory.createForClass(UsersDB);