import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [     
    MongooseModule.forRoot(process.env.MONGO_URL,{dbName: process.env.MONGO_NAME}), UsersModule, CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
