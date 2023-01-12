import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {



    @ApiProperty()
    nickname: string;

    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    role: string;

    @ApiProperty()
    coursesId: string[];

    @ApiProperty()
    imageURL: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;


}