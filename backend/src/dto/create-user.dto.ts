import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {



    @ApiProperty()
    nickName: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    role: string;

    @ApiProperty()
    coursesId: string[];

    @ApiProperty()
    imageURL: string;


}