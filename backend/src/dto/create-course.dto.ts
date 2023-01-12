import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {



    @ApiProperty()
    courseName:string;

    
    @ApiProperty()
    courseBy: string;

    @ApiProperty()
    summary: string;

    @ApiProperty()
    detail: string;

    @ApiProperty()
    imageURL:string;

    // @ApiProperty()
    // students: string[];


}