import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class CoursesDB {

    @Prop()
    _id: Types.ObjectId;



}


export type CoursesDocument = CoursesDB & Document;
export const CoursesSchema = SchemaFactory.createForClass(CoursesDB);