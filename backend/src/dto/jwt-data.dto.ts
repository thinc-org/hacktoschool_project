import { ApiProperty } from "@nestjs/swagger";

export class JwtDataDto {



    @ApiProperty()
    username:string;

    
    @ApiProperty()
    role: string;

    @ApiProperty()
    nickname: string;

    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname:string;


}