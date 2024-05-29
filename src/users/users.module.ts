import { SequelizeModule } from '@nestjs/sequelize';

import { Module } from '@nestjs/common';

import { TasksModule } from 'src/tasks/tasks.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Task } from 'src/tasks/tasks.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Task]),
    TasksModule
  ],
  exports: [UsersService]
})
export class UsersModule {}
