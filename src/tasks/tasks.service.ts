import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {

    constructor(@InjectModel(Task) private taskRepository:typeof Task) {}

    async createTask(dto: CreateTaskDto) {
        const task = await this.taskRepository.create(dto);
        return task;
    }

    async getTaskByName(tasksName: string) {
        const task = await this.taskRepository.findOne({where: {tasksName}})
        return task;
    }
}
