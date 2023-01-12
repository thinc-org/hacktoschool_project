import { Get, Post ,Body, Controller } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UsersDB } from 'src/schemas/usersdb.schema';
import { UsersService } from './users.service';

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

}
