import { SequelizeModule } from '@nestjs/sequelize';

import { Module } from '@nestjs/common';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { User } from 'src/users/users.model';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    SequelizeModule.forFeature([Task, User])
  ],
  exports: [TasksService]
})
export class TasksModule {}
