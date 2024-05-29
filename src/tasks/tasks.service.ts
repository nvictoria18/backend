import { InjectModel } from '@nestjs/sequelize';

import { Injectable } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    findAll(): Task[] | PromiseLike<Task[]> {
      throw new Error('Method not implemented.');
    }

    constructor(@InjectModel(Task) private taskRepository:typeof Task) {}

    async createTask(dto: CreateTaskDto) {
        const task = await this.taskRepository.create(dto);
        return task;
    }

    async getTaskByName(tasksName: string) {
        const task = await this.taskRepository.findOne({where: {tasksName}})
        return task;
    }

    async findOne(id: number): Promise<Task> {
        return await Task.findByPk(id);
    }
    
    async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const task = await this.findOne(id);
        task.tasksName = updateTaskDto.tasksName;
        task.tasksIsCompleted = updateTaskDto.tasksIsCompleted;
        return await task.save();
    }
    
    async remove(id: number): Promise<void> {
        const task = await this.findOne(id);
        await task.destroy();
    }
}
