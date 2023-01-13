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

        const imagesURL = [
            "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
            "https://cdn.pixabay.com/photo/2016/06/13/09/57/meeting-1453895_1280.png",
            "https://cdn.pixabay.com/photo/2016/04/25/07/49/man-1351346_1280.png",
            "https://cdn.pixabay.com/photo/2016/04/25/12/06/man-1351761_1280.png",
            "https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_1280.png"
        ]
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        console.log("here")
        console.log(imagesURL)
        course.imageURL = imagesURL[getRandomInt(5)];
        console.log(course.imageURL)

        const _id = Date.now()+"";
        const newCourse = await new this.coursesModel({ _id, ...course});        // newCourse.save();
        return newCourse.save();
    }

}
