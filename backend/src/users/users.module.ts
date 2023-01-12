import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersDB, UsersSchema } from 'src/schemas/usersdb.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UsersDB.name, schema: UsersSchema }])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
