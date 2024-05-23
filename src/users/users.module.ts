import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Task } from 'src/tasks/tasks.model';
import { UserTasks } from 'src/tasks/user-tasks.model';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Task, UserTasks]),
    TasksModule
  ]
})
export class UsersModule {}
