import { SequelizeModule } from '@nestjs/sequelize';

import { Module } from '@nestjs/common';

import { TasksModule } from 'src/tasks/tasks.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Task } from 'src/tasks/tasks.model';
import { UserTasks } from 'src/tasks/user-tasks.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Task, UserTasks]),
    TasksModule
  ],
  exports: [UsersService]
})
export class UsersModule {}
