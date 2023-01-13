import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDB, UsersDocument } from 'src/schemas/usersdb.schema';
import * as bcrypt from "bcrypt"
import { ReqBodyCreateUserDto } from 'src/dto/req-body-create-user.dto';
import { ReqBodyCheckUserDto } from 'src/dto/req-body-check-user.dto';
import { JwtDataDto } from 'src/dto/jwt-data.dto';


@Injectable()
export class UsersService {

    constructor(
        @InjectModel(UsersDB.name) 
        private readonly usersModel: Model<UsersDocument>
    ) {    }

    async getUsersData() : Promise<UsersDB[]>{
        return await this.usersModel.find().exec();
    }

    async createUsersData(reqBody: ReqBodyCreateUserDto): Promise<UsersDB> {
        
        console.log(reqBody)
        const _id = Date.now()+"";
        const beforeHash = reqBody.body.password;
        console.log("before Hashinh")
        console.log(beforeHash);
        const hash = bcrypt.hashSync(beforeHash,10);
        console.log(hash)
        reqBody.body.password=hash;

        const newUser = new this.usersModel({ _id, ...reqBody.body});        
        return await newUser.save();
    }

    async checkUsernameExists(reqBodyAuthen: ReqBodyCheckUserDto): Promise<boolean>{

        const { username: username } = reqBodyAuthen.body;
        const result = await this.usersModel.exists({ username: username});
        console.log("done checking");

        return !(result===null);
    }

    async checkPassword(reqBodyAuthen: ReqBodyCheckUserDto): Promise<boolean> {

        const { username:username, password: password} = reqBodyAuthen.body;
        const data: UsersDB = await this.usersModel.findOne({ username: username});
        console.log(data.password)
        const match = bcrypt.compareSync(password,data.password);
        console.log('match value is '+match)
        return match;

    }


    async getUserDataForJwt(reqBodyAuthen: ReqBodyCheckUserDto): Promise<JwtDataDto>{
        console.log("Here is key "+process.env.JWT_SECRET)
        const { username:username } = reqBodyAuthen.body;
        const data: UsersDB = await this.usersModel.findOne({ username: username});
        const payload = {
            username: data.username,
            role: data.role,
            nickname: data.nickname,
            firstname: data.firstname,
            lastname: data.lastname
        }
        return payload;

    }

}
