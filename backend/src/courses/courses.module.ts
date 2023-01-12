import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesDB, CoursesSchema } from 'src/schemas/coursesdb.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CoursesDB.name, schema: CoursesSchema }])],
  providers: [CoursesService],
  controllers: [CoursesController]
})
export class CoursesModule {}
