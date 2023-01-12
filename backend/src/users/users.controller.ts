import { Get, Post ,Body, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { check } from 'prettier';
import { CheckUserDto } from 'src/dto/check-user.dto';
import { CreateUserDto } from 'src/dto/create-user.dto';
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
    async createUser(@Body() createCourseDto: CreateUserDto): Promise<UsersDB> {
        
        return await this.coursesService.createUsersData(createCourseDto);

    }

    @Post('/checkUserExist')
    async checkUserExists(@Body() checkUserDto: CheckUserDto): Promise<boolean> {
        return await this.coursesService.checkUsernameExists(checkUserDto);
    }

    @Post('/checkLogin')
    async checkLogin(@Body() checkUserDto: CheckUserDto): Promise<string> {
        if(await this.coursesService.checkUsernameExists(checkUserDto)){
            if(await this.coursesService.checkPassword(checkUserDto)){
                return "Logged In";
            } else {
                return "Wrong password";
            }
        } else {
            return "Username not found";
        }
    }

}
