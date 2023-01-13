import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersDB, UsersSchema } from 'src/schemas/usersdb.schema';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UsersDB.name, schema: UsersSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "12hr"}
    })
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
