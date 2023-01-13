import { Get, Post ,Body, Controller, Res, HttpStatus, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReqBodyCheckUserDto } from 'src/dto/req-body-check-user.dto';
import { ReqBodyCreateUserDto } from 'src/dto/req-body-create-user.dto';
import { UsersDB } from 'src/schemas/usersdb.schema';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtDataDto } from 'src/dto/jwt-data.dto';
import { ReqBodyAddCourseDto } from 'src/dto/req-body-addCourse.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
        private jwtService:JwtService 
    ) {}

    
    @Get()
    async getUserData() : Promise<UsersDB[]> {
        return await this.usersService.getUsersData();
    }

    @Post('/searchId')
    async getUserDataByUsername(@Body() reqBodyCheckUserDto:ReqBodyCheckUserDto) : Promise<UsersDB> {

        return await this.usersService.getUserDataById(reqBodyCheckUserDto.body.username);
    }

    @Post("/post")
    async createUser(@Body() reqBodyCreateUser: ReqBodyCreateUserDto): Promise<UsersDB> {
        
        const res=  await this.usersService.createUsersData(reqBodyCreateUser);
        console.log(res)
        return res;

    }

    @Post('/checkUserExist')
    async checkUserExists(@Body() reqBodyCheckUserDto: ReqBodyCheckUserDto): Promise<boolean> {
        console.log('checking')
        return await this.usersService.checkUsernameExists(reqBodyCheckUserDto);
    }

    @Post('/checkLogin')
    async checkLogin(@Res({ passthrough: true}) response,@Body() reqBodyCheckUserDto: ReqBodyCheckUserDto): Promise<string> {
        
        if(await this.usersService.checkUsernameExists(reqBodyCheckUserDto)){
            if(await this.usersService.checkPassword(reqBodyCheckUserDto)){
                console.log("Correct password");
                const payload: JwtDataDto = await this.usersService.getUserDataForJwt(reqBodyCheckUserDto);
                
                const token = this.jwtService.sign(payload);
                response.status(200) ;
                console.log("LogIn Success")
                return token;


            } else {
                response.status(403);
                console.log("Wrong password");
                return "Wrong Password";
            }
        } else {

            response.status(403)
            console.log("Username not found");
            return "Username Not Found";
        }
    }

    @Post("updateCourse")
    async addCourse(@Body() reqBodyAddCourseDto: ReqBodyAddCourseDto): Promise<UsersDB>{
        console.log(reqBodyAddCourseDto)
        return await this.usersService.addCourse(reqBodyAddCourseDto);

    }



}
