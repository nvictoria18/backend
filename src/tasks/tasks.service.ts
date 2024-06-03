import { InjectModel } from '@nestjs/sequelize';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Task } from './tasks.model';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createTask(newTask: CreateTaskDto): Promise<Task> {
    const task = await this.taskRepository.create(newTask); return task;
  }

  findAll(): Promise<Task[]> {
    const tasks = this.taskRepository.findAll();
    return tasks;
  }

  async getTaskById(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } }); return task;
  }

  async updateTask(tasksId: number, changeTask: UpdateTaskDto): Promise<never | Task> {
    const [count, returningObj] = await this.taskRepository.update(changeTask, {
      where: {
        id: tasksId
      },
      returning: true,
    });
    if (count === 0) throw new NotFoundException(`Not found task with id: ${tasksId}`);
    return returningObj[0];
  }

  async deleteTask(id: number): Promise<number> {
    const task = await this.taskRepository.findByPk(id);
    if (!task) {
      throw new Error('Task not found');
    }
    await task.destroy();
    return 1;
  }
}
