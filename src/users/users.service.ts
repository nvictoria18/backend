import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { TasksService } from 'src/tasks/tasks.service';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User,
                                  private taskService: TasksService) {

  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const task = await this.taskService.getTaskByName("DO");
    await user.$set('tasks', [task.id]);
    user.tasks = [task];
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({include: { all:true }});
    return users;
  }

  async getUsersByEmail(email: string) {
    const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
    return user;
  }
}
