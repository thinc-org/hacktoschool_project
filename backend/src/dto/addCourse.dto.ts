import { ApiProperty } from "@nestjs/swagger";

export class AddCourseDto {

    @ApiProperty()
    username: string;

    @ApiProperty()
    courseId: string;

}