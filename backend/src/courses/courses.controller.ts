import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCourseDto } from 'src/dto/create-course.dto';
import { CoursesDB } from 'src/schemas/coursesdb.schema';
import { CoursesService } from './courses.service';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    
    @Get()
    async getCourseData() : Promise<CoursesDB[]> {
        return this.coursesService.getCoursesData();
    }

    @Post("/post")
    async createCourse(@Body() createCourseDto: CreateCourseDto): Promise<CoursesDB> {
        
        return await this.coursesService.createCoursesData(createCourseDto);

    }

}
