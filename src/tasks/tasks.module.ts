import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './tasks.model';
import { User } from 'src/users/users.model';
import { UserTasks } from './user-tasks.model';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    SequelizeModule.forFeature([Task, User, UserTasks])
  ],
  exports: [TasksService]
})
export class TasksModule {}
