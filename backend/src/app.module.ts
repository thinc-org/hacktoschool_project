import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ConfigModule } from '@nestjs/config';




@Module({
  
  imports: [     
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule, CoursesModule,
    MongooseModule.forRoot(process.env.MONGO_URI,{dbName: process.env.MONGO_NAME})
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  
}
