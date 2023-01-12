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

        const bcrypt = require('bcrypt');


        const _id = Date.now()+"";
        const beforeHash = user.password;
        const hash = bcrypt.hashSync(beforeHash,10);
        user.password=hash;

        const newUser = new this.usersModel({ _id, ...user});        
        return await newUser.save();
    }

    async checkUsernameExists(authen: CheckUserDto): Promise<boolean>{

        const { username: username } = authen;
        if (await this.usersModel.exists({ username: username})){
            return true;
        }
        return true;
    }

    async checkPassword(authen: CheckUserDto): Promise<boolean> {

        const bcrypt = require('bcrypt');

        const { username:username, password: password} = authen;
        const hash = bcrypt.hashSync(password,10);
        const data: UsersDB = await this.usersModel.findOne({ username: username});
        const match = bcrypt.compareSync(data.password,hash);
        if( match) {
            return true;
        } else {
            return false;
        }

    }



}
