import { ApiProperty } from "@nestjs/swagger";

export class CheckUserDto {

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

}