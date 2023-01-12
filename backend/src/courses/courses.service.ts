import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from 'src/dto/create-course.dto';
import { CoursesDB, CoursesDocument } from 'src/schemas/coursesdb.schema';

@Injectable()
export class CoursesService {

    constructor(
        @InjectModel(CoursesDB.name) 
        private readonly coursesModel: Model<CoursesDocument>,
    ) {}

    async getCoursesData() : Promise<CoursesDB[]>{
        return await this.coursesModel.find().exec();
    }

    // async createStudent(createStudentDto: CreateStudentDto): Promise<IStudent> {
    //     const newStudent = await new this.studentModel(createStudentDto);
    //     return newStudent.save();
    //  }

    async createCoursesData(course: CreateCourseDto): Promise<CoursesDB> {
        console.log('before')  
        const _id = Date.now()+"";
        const newCourse = await this.coursesModel.create({ _id, ...course});
        console.log('after')
        // newCourse.save();
        return newCourse;
    }

}
