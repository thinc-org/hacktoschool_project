import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class CoursesDB {

    @Prop()
    _id: Types.ObjectId;

    @Prop()
    courseName: string;

    @Prop()
    courseBy: string;

    @Prop()
    summary: string;

    @Prop()
    detail: string;

    @Prop()
    imageURL:string;

    @Prop()
    students: string[];


}


export type CoursesDocument = CoursesDB & Document;
export const CoursesSchema = SchemaFactory.createForClass(CoursesDB);