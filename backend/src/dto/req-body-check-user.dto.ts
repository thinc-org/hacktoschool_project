import { ApiProperty } from "@nestjs/swagger";

type ReqHeader = {
    'Content-Type': string;
}

type CheckUsername = {
    username: string;
    password: string;
}


export class ReqBodyCheckUserDto {
    @ApiProperty()
    method:string;

    @ApiProperty()
    headers: ReqHeader;

    @ApiProperty()
    body: CheckUsername;
}