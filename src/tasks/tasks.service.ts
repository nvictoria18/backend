import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createTask(dto: CreateTaskDto) {
    const task = await this.taskRepository.create(dto);
    return task;
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.taskRepository.findAll();
    return tasks;
  }

  async getTaskById(id: number) {
    const task = await this.taskRepository.findOne({ where: { id } });
    return task;
  }

  async updateTask(id: number, dto: UpdateTaskDto): Promise<Task> {
    const task = await this.taskRepository.findByPk(id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.tasksName = dto.tasksName || task.tasksName;
    task.tasksIsCompleted = dto.tasksIsCompleted || task.tasksIsCompleted;
    await task.save();
    return task;
  }

  async deleteTask(id: number): Promise<void> {
    const task = await this.taskRepository.findByPk(id);
    if (!task) {
      throw new Error('Task not found');
    }
    await task.destroy();
  }
}