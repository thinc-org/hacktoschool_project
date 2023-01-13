import { Get, Post ,Body, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReqBodyCheckUserDto } from 'src/dto/req-body-check-user.dto';
import { ReqBodyCreateUserDto } from 'src/dto/req-body-create-user.dto';
import { UsersDB } from 'src/schemas/usersdb.schema';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private readonly coursesService: UsersService) {}

    
    @Get()
    async getUserData() : Promise<UsersDB[]> {
        return this.coursesService.getUsersData();
    }

    @Post("/post")
    async createUser(@Body() reqBodyCreateUser: ReqBodyCreateUserDto): Promise<UsersDB> {
        
        const res=  await this.coursesService.createUsersData(reqBodyCreateUser);
        console.log(res)
        return res;

    }

    @Post('/checkUserExist')
    async checkUserExists(@Body() reqBodyCheckUserDto: ReqBodyCheckUserDto): Promise<boolean> {
        console.log('checking')
        return await this.coursesService.checkUsernameExists(reqBodyCheckUserDto);
    }

    @Post('/checkLogin')
    async checkLogin(@Body() reqBodyCheckUserDto: ReqBodyCheckUserDto): Promise<boolean> {
        if(await this.coursesService.checkUsernameExists(reqBodyCheckUserDto)){
            if(await this.coursesService.checkPassword(reqBodyCheckUserDto)){
                console.log("Logged In");
                return true;
            } else {
                console.log("Wrong password");
                return false;
            }
        } else {

            console.log("Username not found");
            return false;
        }
    }

}
