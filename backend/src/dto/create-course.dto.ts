import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {



    @ApiProperty()
    courseName:string;

    // @ApiProperty({required:false})
    // no?: number;

}