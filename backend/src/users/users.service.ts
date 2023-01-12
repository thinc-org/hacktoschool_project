import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CheckUserDto } from 'src/dto/check-user.dto';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UsersDB, UsersDocument } from 'src/schemas/usersdb.schema';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(UsersDB.name) 
        private readonly usersModel: Model<UsersDocument>
    ) {}

    async getUsersData() : Promise<UsersDB[]>{
        return await this.usersModel.find().exec();
    }

    async createUsersData(user: CreateUserDto): Promise<UsersDB> {
        const _id = Date.now()+"";
        const newUser = await new this.usersModel({ _id, ...user});        
        return newUser.save();
    }

    async checkUsernameExists(authen: CheckUserDto): Promise<boolean>{

        const { username: username } = authen;
        if (await this.usersModel.exists({ username: username})){
            return true;
        }
        return true;
    }

    async checkPassword(authen: CheckUserDto): Promise<boolean> {

        const { username:username, password: password} = authen;
        const data: UsersDB = await this.usersModel.findOne({ username: username});
        if( data.password === password) {
            return true;
        } else {
            return false;
        }

    }



}
