import { ApiProperty } from "@nestjs/swagger";

type ReqHeader = {
    'Content-Type': string;
}

type AddCourseToStudent = {
    username: string;
    courseId: string;
}


export class ReqBodyAddCourseDto {
    @ApiProperty()
    method:string;

    @ApiProperty()
    headers: ReqHeader;

    @ApiProperty()
    body: AddCourseToStudent;
}