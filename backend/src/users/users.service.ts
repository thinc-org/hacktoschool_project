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

        const bcryptts = require('bcrypt-ts')

        console.log(user)
        const _id = Date.now()+"";
        const beforeHash = user.password;
        const hash = bcryptts.hashSync(beforeHash,10);
        user.password=hash;

        const newUser = new this.usersModel({ _id, ...user});        
        return await newUser.save();
    }

    async checkUsernameExists(authen: CheckUserDto): Promise<boolean>{

        const { username: username } = authen;
        const result = await this.usersModel.exists({ username: username});

        return !(result===null);
    }

    async checkPassword(authen: CheckUserDto): Promise<boolean> {

        const bcryptts = require('bcrypt-ts')

        const { username:username, password: password} = authen;
        const hash = bcryptts.hashSync(password,10);
        const data: UsersDB = await this.usersModel.findOne({ username: username});
        const match = bcryptts.compareSync(data.password,hash);
        if( match) {
            return true;
        } else {
            return false;
        }

    }



}
