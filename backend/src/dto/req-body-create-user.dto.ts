import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

type ReqHeader = {
    'Content-Type': string;
}


export class ReqBodyCreateUserDto {
    @ApiProperty()
    method:string;

    @ApiProperty()
    headers: ReqHeader;

    @ApiProperty()
    body: CreateUserDto;
}